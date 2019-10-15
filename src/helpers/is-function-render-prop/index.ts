import { Func } from "@repodog/types";
import { RENDER_PROP_REGEXES } from "../../constants";

export default function isFunctionRenderProp(func: Func) {
  const functionString = func.toString().replace("\n", "");

  return RENDER_PROP_REGEXES.reduce((isRenderProp, regex) => {
    if (isRenderProp) return isRenderProp;

    return regex.test(functionString);
  }, false);
}
