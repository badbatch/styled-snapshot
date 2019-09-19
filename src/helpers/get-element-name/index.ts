import { ComponentTypeElement, ForwardRefElement } from "../../types";

export default function getElementName(element: ComponentTypeElement | ForwardRefElement) {
  const { displayName, name } = element.type;
  return displayName || name || "";
}
