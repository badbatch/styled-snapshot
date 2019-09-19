import { ComponentType } from "react";

export default function getComponentName(component: ComponentType) {
  const { displayName, name } = component;
  return displayName || name || "";
}
