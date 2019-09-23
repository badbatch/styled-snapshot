import { ComponentTree } from "../../types";
import isStyledComponent from "../is-styled-component";

export default function getStyledComponents(componentTree: ComponentTree) {
  return componentTree.findWhere(node => isStyledComponent(node.type()));
}
