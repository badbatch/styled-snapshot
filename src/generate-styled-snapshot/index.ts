import { shallow } from "enzyme";
import toJson, { Json } from "enzyme-to-json";
import { ReactNode } from "react";
import collateCSS from "../helpers/collate-css";
import { createCSSHash } from "../helpers/create-css-hash";
import getStyledComponents from "../helpers/get-styled-components";
import getStyledDisplayName from "../helpers/get-styled-display-name";
import loadConfig from "../helpers/load-config";
import toCollateCSS from "../helpers/to-collate-css";
import unwrapElement from "../helpers/unwrap-element";
import visit from "../helpers/visit";
import { SerializedTree, StyledSnapshotConfig } from "../types";

export default function generateStyledSnapshot(element: ReactNode, options: StyledSnapshotConfig = {}) {
  let config: StyledSnapshotConfig = {};

  try {
    config = loadConfig(options);
  } catch (error) {
    config = options;
  }

  const { elementsToUnwrap, reactTreeVisitor, unwrapCustomizer } = config;
  const { contexts, element: unwrappedElement } = unwrapElement(element, elementsToUnwrap, unwrapCustomizer);
  const componentTree = shallow(unwrappedElement);
  let serializedTree: Json | SerializedTree = toJson(componentTree);

  if ("node" in serializedTree) {
    serializedTree = visit(serializedTree, reactTreeVisitor);
  }

  const uniqueStyles: Map<string, [string, string]> = new Map();

  getStyledComponents(componentTree).forEach(wrapper => {
    const serializedStyledTree = toJson(wrapper.dive());
    if (!toCollateCSS(serializedStyledTree) || !("node" in serializedStyledTree)) return;

    const { formatted, unformatted } = collateCSS(serializedStyledTree, contexts);
    const displayName = getStyledDisplayName(serializedStyledTree);
    const id = createCSSHash(displayName, unformatted);
    if (uniqueStyles.has(id)) return;

    uniqueStyles.set(id, [displayName, formatted]);
  });

  return { component: serializedTree, styles: uniqueStyles };
}
