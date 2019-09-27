import { get, isObject } from "lodash";
import { ReactNode } from "react";

export default function isStyledComponent(node: ReactNode) {
  if (!isObject(node)) return false;

  return !!get(node, ["styledComponentId"]) || !!get(node, ["type", "styledComponentId"]);
}
