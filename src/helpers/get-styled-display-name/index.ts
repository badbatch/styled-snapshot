import { Json } from "enzyme-to-json";
import { SCSerializedTree } from "../../types";

export default function getStyledDisplayName(serializedTree: Json) {
  const { forwardedComponent } = serializedTree.props as SCSerializedTree["props"];
  return forwardedComponent.displayName;
}
