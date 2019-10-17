import { get } from "lodash";
import { ForwardRef } from "react-is";

// tslint:disable-next-line no-any
export default function isForwardRefComponent(val: any) {
  return get(val, ["$$typeof"]) === ForwardRef;
}
