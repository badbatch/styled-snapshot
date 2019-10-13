import { isString } from "lodash";
import { ReactNode } from "react";
import { isElement } from "react-is";

export default function isDomElement(node: ReactNode) {
  return isElement(node) && isString(node.type);
}
