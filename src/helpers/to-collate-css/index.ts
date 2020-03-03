import { PlainObject } from "@repodog/types";
import { IGNORE_DATA_ATTR } from "../../constants";

export default function toCollateCSS(props: PlainObject) {
  return !props[IGNORE_DATA_ATTR];
}
