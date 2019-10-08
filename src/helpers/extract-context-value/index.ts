import { isFunction } from "lodash";
import { AnyConsumer, ExtractedContexts, StyledSnapshotConfig } from "../../types";

export default function extractContextValue(
  contexts: ExtractedContexts,
  consumer: AnyConsumer,
  value: any, // tslint:disable-line no-any
  { contextKeySetter }: StyledSnapshotConfig,
) {
  const contextKey = (isFunction(contextKeySetter) && contextKeySetter(consumer)) || "value";
  contexts.set(consumer, [contextKey, value]);
}
