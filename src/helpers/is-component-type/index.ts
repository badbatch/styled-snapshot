import { isObject } from "lodash";
import { ReactNode } from "react";
import { Element, typeOf } from "react-is";
import isClassComponent from "../is-class-component";
import isFunctionComponent from "../is-function-component";

export default function isComponentType(node: ReactNode) {
  if (!isObject(node)) return false;

  if (!("type" in node)) return false;

  return typeOf(node) === Element && (isFunctionComponent(node.type) || isClassComponent(node.type));
}
