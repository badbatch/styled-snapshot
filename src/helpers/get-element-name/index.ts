import { ComponentTypeElement } from "../../types";

export default function getElementName(element: ComponentTypeElement) {
  const { displayName, name } = element.type;
  return displayName || name || "";
}
