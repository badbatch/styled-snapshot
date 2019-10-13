import React from "react";
import { ThemeContext } from "styled-components";
import isDomElement from ".";
import {
  ClassComponent,
  ForwardRefComponent,
  FunctionComponent,
  MemoComponent,
  portal,
} from "../../__test__/components";
import { StyledDiv } from "../../__test__/styled";

describe("isDomElement", () => {
  describe("invalid elements", () => {
    describe("when a primitive is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(true)).toBe(false);
      });
    });

    describe("when a Class component type is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(<ClassComponent />)).toBe(false);
      });
    });

    describe("when an array of dom elements is passed in", () => {
      it("should return false", () => {
        expect(isDomElement([<div />, <div />, <div />])).toBe(false);
      });
    });

    describe("when a Context Consumer is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(<ThemeContext.Consumer>{() => <div />}</ThemeContext.Consumer>)).toBe(false);
      });
    });

    describe("when a Context Provider is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(<ThemeContext.Provider value="" />)).toBe(false);
      });
    });

    describe("when a ForwardRef is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(<ForwardRefComponent />)).toBe(false);
      });
    });

    describe("when a Fragment is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(<></>)).toBe(false);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(<FunctionComponent />)).toBe(false);
      });
    });

    describe("when a Memo is passed in", () => {
      it("should return false", () => {
        expect(isDomElement((<MemoComponent />).type)).toBe(false); // tslint:disable-line prettier
      });
    });

    describe("when a Portal is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(portal)).toBe(false);
      });
    });

    describe("when a Styled Component is passed in", () => {
      it("should return false", () => {
        expect(isDomElement(<StyledDiv />)).toBe(false);
      });
    });
  });

  describe("valid elements", () => {
    describe("when a dom element is passed in", () => {
      it("should return true", () => {
        expect(isDomElement(<div />)).toBe(true);
      });
    });
  });
});
