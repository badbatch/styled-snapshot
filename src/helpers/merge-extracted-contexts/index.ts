import { ExtractedContexts } from "../../types";

export default function mergeExtractedContexts(contexts: ExtractedContexts) {
  if (!contexts) return {};

  return Array.from(contexts.values()).reduce((acc, [key, value]) => {
    return { ...acc, [key]: value };
  }, {});
}
