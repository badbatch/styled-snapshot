import React from "react";
import { ThemeContext } from "styled-components";
import isComponentType from ".";
import {
  ClassComponent,
  ForwardRefComponent,
  FunctionComponent,
  MemoComponent,
  portal,
} from "../../__test__/components";

describe("isComponentType", () => {
  describe("invalid elements", () => {
    describe("when a primitive is passed in", () => {
      it("should return false", () => {
        expect(isComponentType(true)).toBe(false);
      });
    });

    describe("when a dom element is passed in", () => {
      it("should return false", () => {
        expect(isComponentType(<div />)).toBe(false);
      });
    });

    describe("when an array of dom elements is passed in", () => {
      it("should return false", () => {
        expect(isComponentType([<div />, <div />, <div />])).toBe(false);
      });
    });

    describe("when a Context Consumer is passed in", () => {
      it("should return false", () => {
        expect(isComponentType(<ThemeContext.Consumer>{() => <div />}</ThemeContext.Consumer>)).toBe(false);
      });
    });

    describe("when a Context Provider is passed in", () => {
      it("should return false", () => {
        expect(isComponentType(<ThemeContext.Provider value="" />)).toBe(false);
      });
    });

    describe("when a ForwardRef is passed in", () => {
      it("should return false", () => {
        expect(isComponentType(<ForwardRefComponent />)).toBe(false);
      });
    });

    describe("when a Fragment is passed in", () => {
      it("should return false", () => {
        expect(isComponentType(<></>)).toBe(false);
      });
    });

    describe("when a Memo is passed in", () => {
      it("should return false", () => {
        expect(isComponentType((<MemoComponent />).type)).toBe(false); // tslint:disable-line prettier
      });
    });

    describe("when a Portal is passed in", () => {
      it("should return false", () => {
        expect(isComponentType(portal)).toBe(false);
      });
    });
  });

  describe("valid elements", () => {
    describe("when a Class component type is passed in", () => {
      it("should return true", () => {
        expect(isComponentType(<ClassComponent />)).toBe(true);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return true", () => {
        expect(isComponentType(<FunctionComponent />)).toBe(true);
      });
    });
  });
});
