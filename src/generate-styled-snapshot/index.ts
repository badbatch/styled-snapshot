import { shallow } from "enzyme";
import toJson, { Json } from "enzyme-to-json";
import { ReactNode } from "react";
import collateCSS from "../helpers/collate-css";
import { createCSSHash } from "../helpers/create-css-hash";
import getStyledComponents from "../helpers/get-styled-components";
import getStyledDisplayName from "../helpers/get-styled-display-name";
import loadConfig from "../helpers/load-config";
import * as log from "../helpers/log";
import mergeExtractedContexts from "../helpers/merge-extracted-contexts";
import toCollateCSS from "../helpers/to-collate-css";
import unwrap from "../helpers/unwrap";
import visit from "../helpers/visit";
import { SerializedTree, StyledSnapshotConfig } from "../types";

export default function generateStyledSnapshot(element: ReactNode, options: StyledSnapshotConfig = {}) {
  let config: StyledSnapshotConfig = {};

  try {
    config = loadConfig(options);
  } catch (error) {
    config = options;
  }

  log.setLevel(options);
  log.info("element passed to generateStyledSnapshot", element);

  const { contexts, element: unwrappedElement } = unwrap(element, config);

  log.info("unwrapped element", unwrappedElement);

  const componentTree = shallow(unwrappedElement);
  let serializedTree: Json | SerializedTree = toJson(componentTree);

  if ("node" in serializedTree) {
    serializedTree = visit(serializedTree, config);
  }

  const uniqueStyles: Map<string, [string, string]> = new Map();

  getStyledComponents(componentTree).forEach(wrapper => {
    const serializedStyledTree = toJson(wrapper.dive());
    if (!toCollateCSS(serializedStyledTree) || !("node" in serializedStyledTree)) return;

    const { formatted, unformatted } = collateCSS(serializedStyledTree, mergeExtractedContexts(contexts));
    const displayName = getStyledDisplayName(serializedStyledTree);
    const id = createCSSHash(displayName, unformatted);
    if (uniqueStyles.has(id)) return;

    uniqueStyles.set(id, [displayName, formatted]);
  });

  log.info("serialized element", serializedTree);

  return { component: serializedTree, styles: uniqueStyles };
}
