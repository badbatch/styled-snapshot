import { isUndefined } from "lodash";
import { ComponentTree } from "../../types";

export default function getElementsWithCSSProp(componentTree: ComponentTree) {
  return componentTree.findWhere(node => {
    const props = node.props();
    return !isUndefined(props.css || props.styles);
  });
}
