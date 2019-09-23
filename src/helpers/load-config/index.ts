import { resolvePathToCwd } from "@repodog/helpers";
import { CONFIG_FILENAME } from "../../constants";
import { StyledSnapshotConfig } from "../../types";

export default function loadConfig(options: StyledSnapshotConfig): StyledSnapshotConfig {
  return { ...require(resolvePathToCwd(CONFIG_FILENAME)), ...options };
}
