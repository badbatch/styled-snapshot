import { Json } from "enzyme-to-json";
import { IGNORE_DATA_ATTR } from "../../constants";

export default function toCollateCSS(serializedTree: Json) {
  return !serializedTree.props[IGNORE_DATA_ATTR];
}
