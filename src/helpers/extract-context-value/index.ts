import { isFunction } from "lodash";
import { ThemeConsumer } from "styled-components";
import { SC_CONTEXT_PROP } from "../../constants";
import { AnyConsumer, ExtractedContexts, StyledSnapshotConfig } from "../../types";

export default function extractContextValue(
  contexts: ExtractedContexts,
  consumer: AnyConsumer,
  value: any, // tslint:disable-line no-any
  { contextKeySetter }: StyledSnapshotConfig,
) {
  const contextKey =
    consumer === ThemeConsumer
      ? SC_CONTEXT_PROP
      : (isFunction(contextKeySetter) && contextKeySetter(consumer)) || "value";

  contexts.set(consumer, [contextKey, value]);
}
