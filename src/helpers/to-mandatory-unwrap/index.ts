import { isObject } from "lodash";
import { ReactNode } from "react";
import { ContextConsumer, ContextProvider, ForwardRef, Fragment, Portal, typeOf } from "react-is";
import isMemoType from "../is-memo-type";

export default function toMandatoryUnwrap(element: ReactNode) {
  if (!isObject(element)) return false;

  const typeSymbol = typeOf(element);

  return (
    typeSymbol === ContextConsumer ||
    typeSymbol === ContextProvider ||
    typeSymbol === ForwardRef ||
    typeSymbol === Fragment ||
    typeSymbol === Portal ||
    isMemoType(element)
  );
}
