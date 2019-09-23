import md5 from "md5";

export function createCSSHash(displayName: string, css: string) {
  return md5(`${displayName}-${css.trim()}`);
}
