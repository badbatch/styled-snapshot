import { isObject } from "lodash";
import { ReactNode } from "react";
import { Memo, typeOf } from "react-is";

export default function isMemoType(element: ReactNode) {
  if (!isObject(element)) return false;

  if (!("type" in element)) return false;

  return typeOf(element.type) === Memo;
}
