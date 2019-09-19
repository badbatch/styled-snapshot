import React from "react";
import { ThemeContext } from "styled-components";
import isMemoType from ".";
import {
  ClassComponent,
  ForwardRefComponent,
  FunctionComponent,
  MemoComponent,
  portal,
} from "../../__test__/components";

describe("isMemoType", () => {
  describe("invalid elements", () => {
    describe("when a primitive is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(true)).toBe(false);
      });
    });

    describe("when a dom element is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(<div />)).toBe(false);
      });
    });

    describe("when an array of dom elements is passed in", () => {
      it("should return false", () => {
        expect(isMemoType([<div />, <div />, <div />])).toBe(false);
      });
    });

    describe("when a Class component type is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(<ClassComponent />)).toBe(false);
      });
    });

    describe("when a Context Consumer is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(<ThemeContext.Consumer>{() => <div />}</ThemeContext.Consumer>)).toBe(false);
      });
    });

    describe("when a Context Provider is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(<ThemeContext.Provider value="" />)).toBe(false);
      });
    });

    describe("when a Fragment is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(<></>)).toBe(false);
      });
    });

    describe("when a ForwardRef is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(<ForwardRefComponent />)).toBe(false);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(<FunctionComponent />)).toBe(false);
      });
    });

    describe("when a Portal is passed in", () => {
      it("should return false", () => {
        expect(isMemoType(portal)).toBe(false);
      });
    });
  });

  describe("valid elements", () => {
    describe("when a Memo is passed in", () => {
      it("should return true", () => {
        expect(isMemoType(<MemoComponent />)).toBe(true);
      });
    });
  });
});
