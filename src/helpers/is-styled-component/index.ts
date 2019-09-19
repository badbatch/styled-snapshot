import { get, isString } from "lodash";
import { ComponentType } from "react";

export default function isStyledComponent(component: string | ComponentType) {
  if (!component || isString(component)) return false;
  return !!get(component, ["styledComponentId"], false);
}
