import { get } from "lodash";
import { ReactNode } from "react";

export default function isClassComponent(node: ReactNode) {
  return !!get(node, ["prototype", "isReactComponent"]) || !!get(node, ["type", "prototype", "isReactComponent"]);
}
