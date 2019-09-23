import { Func, ObjectMap } from "@repodog/types";
import { isArray, isFunction } from "lodash";
import { format } from "prettier";
import { ExtractedContexts, SCComponentStyle, SCSerializedTree } from "../../types";

function collateRule(css: string, rule: string | number | Func, props: ObjectMap) {
  const trimmedCSS = css.trim();
  let _css = "";

  if (isFunction(rule)) {
    const styles = rule(props);

    if (styles) {
      _css += collateRule(trimmedCSS, styles, props);
    } else if (trimmedCSS.charAt(trimmedCSS.length - 1) === ":") {
      _css += "null";
    }
  } else if (isArray(rule)) {
    _css += collateRules(rule, props);
  } else {
    _css += String(rule);
  }

  return _css;
}

function collateRules(rules: SCComponentStyle["rules"], props: ObjectMap) {
  return rules.reduce((css: string, rule) => {
    let _css = css;
    _css += collateRule(css, rule, props);
    return _css;
  }, "");
}

export default function collateCSS(serializedTree: SCSerializedTree, contexts?: ExtractedContexts) {
  const { forwardedComponent, ...otherProps } = serializedTree.props;
  const { componentStyle } = forwardedComponent;
  const unformatted = `{${collateRules(componentStyle.rules, { ...otherProps, ...(contexts || {}) })}}`;

  return {
    formatted: `\n${format(unformatted, { parser: "css" }).trim()}\n`,
    unformatted,
  };
}
