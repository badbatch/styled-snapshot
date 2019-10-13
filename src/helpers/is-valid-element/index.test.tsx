import React from "react";
import { ThemeContext } from "styled-components";
import isValidElement from ".";
import {
  ClassComponent,
  ForwardRefComponent,
  FunctionComponent,
  MemoComponent,
  portal,
} from "../../__test__/components";
import { StyledDiv } from "../../__test__/styled";

describe("isValidElement", () => {
  describe("invalid elements", () => {
    describe("when a primitive is passed in", () => {
      it("should return false", () => {
        expect(isValidElement(true)).toBe(false);
      });
    });

    describe("when an array of dom elements is passed in", () => {
      it("should return false", () => {
        expect(isValidElement([<div />, <div />, <div />])).toBe(false);
      });
    });

    describe("when a Context Consumer is passed in", () => {
      it("should return false", () => {
        expect(isValidElement(<ThemeContext.Consumer>{() => <div />}</ThemeContext.Consumer>)).toBe(false);
      });
    });

    describe("when a Context Provider is passed in", () => {
      it("should return false", () => {
        expect(isValidElement(<ThemeContext.Provider value="" />)).toBe(false);
      });
    });

    describe("when a ForwardRef is passed in", () => {
      it("should return false", () => {
        expect(isValidElement(<ForwardRefComponent />)).toBe(false);
      });
    });

    describe("when a Fragment is passed in", () => {
      it("should return false", () => {
        expect(isValidElement(<></>)).toBe(false);
      });
    });

    describe("when a Memo is passed in", () => {
      it("should return false", () => {
        expect(isValidElement((<MemoComponent />).type)).toBe(false); // tslint:disable-line prettier
      });
    });

    describe("when a Portal is passed in", () => {
      it("should return false", () => {
        expect(isValidElement(portal)).toBe(false);
      });
    });
  });

  describe("valid elements", () => {
    describe("when a Class component type is passed in", () => {
      it("should return true", () => {
        expect(isValidElement(<ClassComponent />)).toBe(true);
      });
    });

    describe("when a dom element is passed in", () => {
      it("should return true", () => {
        expect(isValidElement(<div />)).toBe(true);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return true", () => {
        expect(isValidElement(<FunctionComponent />)).toBe(true);
      });
    });

    describe("when a Styled Component is passed in", () => {
      it("should return true", () => {
        expect(isValidElement(<StyledDiv />)).toBe(true);
      });
    });
  });
});
