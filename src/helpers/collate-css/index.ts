import { Func, PlainObject } from "@repodog/types";
import { isArray, isFunction } from "lodash";
import { format } from "prettier";
import { CollateCSSProps, SCSerializedTree, StyledRules } from "../../types";

function collateRule(css: string, rule: string | number | Func, props: PlainObject) {
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

function collateRules(rules: StyledRules, props: PlainObject) {
  return rules.reduce((css: string, rule) => {
    let _css = css;
    _css += collateRule(css, rule, props);
    return _css;
  }, "");
}

export function collatePropsCSS({ css, styles, ...otherProps }: CollateCSSProps, contexts: PlainObject = {}) {
  let unformatted = "";
  if (isArray(css)) unformatted += collateRules(css, { ...otherProps, ...contexts }).trim();
  if (isArray(styles)) unformatted += collateRules(styles, { ...otherProps, ...contexts }).trim();

  return {
    formatted: `\n${format(`{${unformatted}}`, { parser: "css" }).trim()}\n`,
    unformatted,
  };
}

export function collateStyledCSS(serializedTree: SCSerializedTree, contexts: PlainObject = {}) {
  const { forwardedComponent, ...otherProps } = serializedTree.props;
  const { componentStyle } = forwardedComponent;
  const unformatted = collateRules(componentStyle.rules, { ...otherProps, ...contexts }).trim();

  return {
    formatted: `\n${format(`{${unformatted}}`, { parser: "css" }).trim()}\n`,
    unformatted,
  };
}
