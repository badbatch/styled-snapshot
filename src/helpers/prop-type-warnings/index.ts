/* tslint:disable no-console */

let consoleError: Console["error"];

export function disablePropTypeWarnings() {
  consoleError = console.error;

  console.error = (message: string, ...optionalParams: any[]) => {
    if (!/^(Warning: Failed prop type)/.test(message)) {
      consoleError(message, ...optionalParams);
    }
  };
}

export function enablePropTypeWarnings() {
  console.error = consoleError;
}
