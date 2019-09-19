import { isFunction } from "lodash";
import { ReactNode } from "react";

export default function isFunctionComponent(node: ReactNode) {
  return (
    isFunction(node) &&
    ("contextTypes" in node || "defaultProps" in node || "displayName" in node || "propTypes" in node)
  );
}
