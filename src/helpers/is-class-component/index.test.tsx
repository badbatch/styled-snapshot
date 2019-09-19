import React from "react";
import { ThemeContext } from "styled-components";
import isClassComponent from ".";
import {
  ClassComponent,
  ForwardRefComponent,
  FunctionComponent,
  MemoComponent,
  portal,
} from "../../__test__/components";

describe("isClassComponent", () => {
  describe("invalid elements", () => {
    describe("when a dom element is passed in", () => {
      it("should return false", () => {
        expect(isClassComponent(<div />)).toBe(false);
      });
    });

    describe("when a Context Consumer is passed in", () => {
      it("should return false", () => {
        expect(isClassComponent(<ThemeContext.Consumer>{() => <div />}</ThemeContext.Consumer>)).toBe(false);
      });
    });

    describe("when a Context Provider is passed in", () => {
      it("should return false", () => {
        expect(isClassComponent(<ThemeContext.Provider value="" />)).toBe(false);
      });
    });

    describe("when a ForwardRef is passed in", () => {
      it("should return true", () => {
        expect(isClassComponent(<ForwardRefComponent />)).toBe(false);
      });
    });

    describe("when a Fragment is passed in", () => {
      it("should return false", () => {
        expect(isClassComponent(<></>)).toBe(false);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return true", () => {
        expect(isClassComponent(<FunctionComponent />)).toBe(false);
      });
    });

    describe("when a Memo is passed in", () => {
      it("should return true", () => {
        expect(isClassComponent((<MemoComponent />).type)).toBe(false); // tslint:disable-line prettier
      });
    });

    describe("when a Portal is passed in", () => {
      it("should return false", () => {
        expect(isClassComponent(portal)).toBe(false);
      });
    });
  });

  describe("valid elements", () => {
    describe("when a Class component type is passed in", () => {
      it("should return true", () => {
        expect(isClassComponent(<ClassComponent />)).toBe(true);
      });

      it("should return true", () => {
        expect(isClassComponent((<ClassComponent />).type)).toBe(true); // tslint:disable-line prettier
      });
    });
  });
});
