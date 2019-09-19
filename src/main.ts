import { warn } from "@repodog/helpers";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { isFunction } from "lodash";
import { ReactNode } from "react";
import isStyledComponent from "./helpers/is-styled-component";
import loadConfig from "./helpers/load-config";
import unwrapElement from "./helpers/unwrap-element";
import visit from "./helpers/visit";
import { StyledSnapshotConfig } from "./types";

export default function toMatchStyledSnapshot(element: ReactNode) {
  let config: StyledSnapshotConfig = {};

  try {
    config = loadConfig();
  } catch (error) {
    warn("no styld-snapshot config found, falling back to defaults");
  }

  const { elementsToUnwrap = [], reactTreeVisitor, unwrapCustomizer } = config;
  const { contexts, element: unwrappedElement } = unwrapElement(element, elementsToUnwrap, unwrapCustomizer);
  const componentTree = shallow(unwrappedElement);
  let serializedTree = toJson(componentTree);

  if (isFunction(reactTreeVisitor)) {
    serializedTree = visit(serializedTree, reactTreeVisitor);
  }

  it(name, () => expect(serializedTree).toMatchSnapshot());

  const styledComponents = componentTree.findWhere(node => isStyledComponent(node.type()));
  const uniqueStyledComponents = [];

  styledComponents.forEach(wrapper => {
    const serializedSubTree = toJson(wrapper.dive());
    const { forwardedComponent, ...otherProps } = get(serializedSubTree, ["props"], {});

    if (!forwardedComponent || !forwardedComponent.displayName || otherProps["data-component-decoration"]) {
      return;
    }

    const { componentStyle, displayName } = forwardedComponent;
    const collatedCSS = collateCSS(displayName, componentStyle.rules, { ...otherProps, theme });
    const id = md5(`${displayName}-${collatedCSS.trim()}`);
    if (uniqueStyledComponents.includes(id)) return;

    uniqueStyledComponents.push(id);
    const rules = format(collatedCSS, { parser: "css" });
    it(`${name} ${displayName}`, () => expect(rules).toMatchSnapshot());
  });
}
