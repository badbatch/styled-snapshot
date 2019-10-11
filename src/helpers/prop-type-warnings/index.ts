/* tslint:disable no-console */

let consoleError: Console["error"];

export function disablePropTypeWarnings() {
  consoleError = console.error;

  console.error = (message: string, ...optionalParams: any[]) => {
    if (!/^(Warning: )/.test(message)) {
      consoleError(message, ...optionalParams);
    }
  };
}

export function enablePropTypeWarnings() {
  console.error = consoleError;
}
