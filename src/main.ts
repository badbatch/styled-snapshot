import { warn } from "@repodog/helpers";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { isFunction } from "lodash";
import { ReactNode } from "react";
import collateCSS from "./helpers/collate-css";
import { createCSSHash } from "./helpers/create-css-hash";
import getStyledComponents from "./helpers/get-styled-components";
import getStyledDisplayName from "./helpers/get-styled-display-name";
import loadConfig from "./helpers/load-config";
import toCollateCSS from "./helpers/to-collate-css";
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

  const { elementsToUnwrap, reactTreeVisitor, unwrapCustomizer } = config;
  const { contexts, element: unwrappedElement } = unwrapElement(element, elementsToUnwrap, unwrapCustomizer);
  const componentTree = shallow(unwrappedElement);
  let serializedTree = toJson(componentTree);

  if (isFunction(reactTreeVisitor)) {
    serializedTree = visit(serializedTree, reactTreeVisitor);
  }

  it(name, () => expect(serializedTree).toMatchSnapshot());
  const uniqueStyledComponents: string[] = [];

  getStyledComponents(componentTree).forEach(wrapper => {
    const serializedStyledTree = toJson(wrapper.dive());
    if (!toCollateCSS(serializedStyledTree)) return;

    const { formatted, unformatted } = collateCSS(serializedStyledTree, contexts);
    const displayName = getStyledDisplayName(serializedStyledTree);
    const id = createCSSHash(displayName, unformatted);
    if (uniqueStyledComponents.includes(id)) return;

    uniqueStyledComponents.push(id);
    it(`${name} ${displayName}`, () => expect(formatted).toMatchSnapshot());
  });
}
