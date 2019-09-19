import React from "react";
import { ThemeContext } from "styled-components";
import toMandatoryUnwrap from ".";
import {
  ClassComponent,
  ForwardRefComponent,
  FunctionComponent,
  MemoComponent,
  portal,
} from "../../__test__/components";

describe("toMandatoryUnwrap", () => {
  describe("invalid elements", () => {
    describe("when a primitive is passed in", () => {
      it("should return false", () => {
        expect(toMandatoryUnwrap(true)).toBe(false);
      });
    });

    describe("when a dom element is passed in", () => {
      it("should return false", () => {
        expect(toMandatoryUnwrap(<div />)).toBe(false);
      });
    });

    describe("when an array of dom elements is passed in", () => {
      it("should return false", () => {
        expect(toMandatoryUnwrap([<div />, <div />, <div />])).toBe(false);
      });
    });

    describe("when a Class component type is passed in", () => {
      it("should return false", () => {
        expect(toMandatoryUnwrap(<ClassComponent />)).toBe(false);
      });
    });

    describe("when a Fragment is passed in", () => {
      it("should return false", () => {
        expect(toMandatoryUnwrap(<></>)).toBe(false);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return false", () => {
        expect(toMandatoryUnwrap(<FunctionComponent />)).toBe(false);
      });
    });
  });

  describe("valid elements", () => {
    describe("when a Context Consumer is passed in", () => {
      it("should return true", () => {
        expect(toMandatoryUnwrap(<ThemeContext.Consumer>{() => <div />}</ThemeContext.Consumer>)).toBe(true);
      });
    });

    describe("when a Context Provider is passed in", () => {
      it("should return true", () => {
        expect(toMandatoryUnwrap(<ThemeContext.Provider value="" />)).toBe(true);
      });
    });

    describe("when a ForwardRef is passed in", () => {
      it("should return true", () => {
        expect(toMandatoryUnwrap(<ForwardRefComponent />)).toBe(true);
      });
    });

    describe("when a Memo is passed in", () => {
      it("should return true", () => {
        expect(toMandatoryUnwrap(<MemoComponent />)).toBe(true);
      });
    });

    describe("when a Portal is passed in", () => {
      it("should return true", () => {
        expect(toMandatoryUnwrap(portal)).toBe(true);
      });
    });
  });
});
