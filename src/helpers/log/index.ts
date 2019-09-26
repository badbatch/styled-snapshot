import { ERROR, INFO, WARN } from "../../constants";
import { StyledSnapshotConfig } from "../../types";

export function error(message: string, ...optionalParams: any[]) {
  if (getLevel() < 1) return;
  console.error(message, ...optionalParams); // tslint:disable-line no-console
}

export function warn(message: string, ...optionalParams: any[]) {
  if (getLevel() < 2) return;
  console.warn(message, ...optionalParams); // tslint:disable-line no-console
}

export function info(message: string, ...optionalParams: any[]) {
  if (getLevel() < 3) return;
  console.log(message, ...optionalParams); // tslint:disable-line no-console
}

export function getLevel() {
  switch (process.env.STYLED_SNAPSHOT_LOG_LEVEL) {
    case ERROR:
      return 1;
    case WARN:
      return 2;
    case INFO:
      return 3;
    default:
      return 0;
  }
}

export function setLevel({ logLevel }: StyledSnapshotConfig) {
  if (logLevel) process.env.STYLED_SNAPSHOT_LOG_LEVEL = logLevel;
}
