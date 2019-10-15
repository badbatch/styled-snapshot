import { ObjectMap } from "@repodog/types";
import { IGNORE_DATA_ATTR } from "../../constants";

export default function toCollateCSS(props: ObjectMap) {
  return !props[IGNORE_DATA_ATTR];
}
