import { isObject } from "lodash";
import { ReactNode } from "react";
import { UNWRAP_DATA_ATTR } from "../../constants";

export default function hasUnwrapDataAttribute(node: ReactNode) {
  if (!isObject(node)) return false;

  if (!("props" in node)) return false;

  return !!node.props[UNWRAP_DATA_ATTR];
}
