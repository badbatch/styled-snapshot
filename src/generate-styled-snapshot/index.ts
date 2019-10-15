import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ComponentType, ReactNode } from "react";
import { collatePropsCSS, collateStyledCSS } from "../helpers/collate-css";
import { createCSSHash } from "../helpers/create-css-hash";
import getComponentName from "../helpers/get-component-name";
import getElementsWithCSSProp from "../helpers/get-elements-with-css-prop";
import getStyledComponents from "../helpers/get-styled-components";
import getStyledDisplayName from "../helpers/get-styled-display-name";
import loadConfig from "../helpers/load-config";
import * as log from "../helpers/log";
import mergeExtractedContexts from "../helpers/merge-extracted-contexts";
import { disablePropTypeWarnings, enablePropTypeWarnings } from "../helpers/prop-type-warnings";
import toCollateCSS from "../helpers/to-collate-css";
import unwrap from "../helpers/unwrap";
import visit from "../helpers/visit";
import { StyledSnapshotConfig } from "../types";

export default function generateStyledSnapshot(element: ReactNode, options: StyledSnapshotConfig = {}) {
  let config: StyledSnapshotConfig = {};

  try {
    config = loadConfig(options);
  } catch (error) {
    config = options;
  }

  log.setLevel(options);
  log.info("element passed to generateStyledSnapshot:", element);

  const { contexts, element: unwrappedElement } = unwrap(element, config);

  log.info("unwrapped element:", unwrappedElement);

  const componentTree = shallow(unwrappedElement);
  const serializedTree = toJson(componentTree);

  disablePropTypeWarnings();

  const visitedSerializedTree = visit(serializedTree, config);
  const uniqueStyles: Map<string, [string, string]> = new Map();
  const mergedContexts = mergeExtractedContexts(contexts);

  getStyledComponents(componentTree).forEach(wrapper => {
    const serializedStyledTree = toJson(wrapper.dive());
    if (!toCollateCSS(serializedStyledTree.props) || !("node" in serializedStyledTree)) return;

    const { formatted, unformatted } = collateStyledCSS(serializedStyledTree, mergedContexts);
    if (!unformatted) return;

    const displayName = getStyledDisplayName(serializedStyledTree);
    const id = createCSSHash(displayName, unformatted);
    if (uniqueStyles.has(id)) return;

    uniqueStyles.set(id, [displayName, formatted]);
  });

  getElementsWithCSSProp(componentTree).forEach(wrapper => {
    const props = wrapper.props();
    if (!toCollateCSS(props)) return;

    const { formatted, unformatted } = collatePropsCSS(props, mergedContexts);
    if (!unformatted) return;

    const displayName = `${getComponentName(wrapper.type() as ComponentType)} props`;
    const id = createCSSHash(displayName, unformatted);
    if (uniqueStyles.has(id)) return;

    uniqueStyles.set(id, [displayName, formatted]);
  });

  log.info("serialized element:", visitedSerializedTree);

  enablePropTypeWarnings();

  return { component: visitedSerializedTree, styles: uniqueStyles };
}
