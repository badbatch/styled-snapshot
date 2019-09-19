import { get } from "lodash";
import { ReactNode } from "react";
import { IGNORE_DATA_ATTR } from "../../constants";

export default function filterOutIgnoredElements(nodes: ReactNode[]) {
  return nodes.filter(node => !get(node, ["props", IGNORE_DATA_ATTR], false));
}
