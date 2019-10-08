import { ExtractedContexts } from "../../types";

export default function mergeExtractedContexts(contexts: ExtractedContexts) {
  if (!contexts) return {};

  return Array.from(contexts.values()).reduce((acc, value) => {
    return { ...acc, ...value };
  }, {});
}
