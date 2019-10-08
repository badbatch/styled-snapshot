import { AnyConsumer, ExtractedContexts } from "../../types";

export default function getExtractedContextValue(contexts: ExtractedContexts, consumer: AnyConsumer) {
  return (contexts.get(consumer) || [])[1];
}
