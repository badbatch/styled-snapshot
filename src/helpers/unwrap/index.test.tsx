import React from "react";
import unwrap from ".";
import {
  ClassComponent,
  ContextComponent,
  ContextProviderComponent,
  ForwardRefComponent,
  FunctionComponent,
  MemoComponent,
  PortalComponent,
  SCContextComponent,
} from "../../__test__/components";
import { StyledDiv } from "../../__test__/styled";
import { UnwrapResult } from "../../types";
import getElementName from "../get-element-name";

describe("unwrap", () => {
  describe("element types to unwrap", () => {
    describe("when a ClassComponent element is passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(<ClassComponent />, { elementsToUnwrap: ["ClassComponent"] });
        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when a ContextComponent element is passed in", () => {
      let result: UnwrapResult;

      it("should return the correct unwrapped element", () => {
        result = unwrap(<ContextComponent />, { elementsToUnwrap: ["ContextComponent", "ContextConsumerComponent"] });
        expect(getElementName(result.element)).toBe("ClassComponent");
      });

      it("should have the theme in the element props", () => {
        expect(result.element.props).toEqual({ value: "dark" });
      });
    });

    describe("when a ContextProviderComponent element is passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(<ContextProviderComponent />, { elementsToUnwrap: ["ContextProviderComponent"] });
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a ForwardRef element is passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(<ForwardRefComponent />, { elementsToUnwrap: ["ForwardRefComponent"] });
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a FunctionalComponent element is passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(<FunctionComponent />, { elementsToUnwrap: ["FunctionComponent"] });
        expect(getElementName(result.element)).toBe("styled.div");
      });
    });

    describe("when a MemoComponent element is passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(<MemoComponent />, { elementsToUnwrap: ["MemoComponent"] });
        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when a PortalComponent element is passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(<PortalComponent />, { elementsToUnwrap: ["PortalComponent"] });
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a SCContextComponent element is passed in", () => {
      let result: UnwrapResult;

      beforeAll(() => {
        result = unwrap(<SCContextComponent />, {
          elementsToUnwrap: ["SCContextComponent", "ThemeProvider", "WithThemeClassComponent"],
        });
      });

      it("should return the correct unwrapped element", () => {
        expect(getElementName(result.element)).toBe("ClassComponent");
      });

      it("should have the theme in the element props", () => {
        expect(result.element.props).toEqual({ theme: { type: "light" } });
      });
    });

    describe("when a Styled Component element is passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(
          <StyledDiv data-styled-unwrap>
            <FunctionComponent />
          </StyledDiv>,
        );

        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when an element with unwrap data attribute is passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(
          <div data-styled-unwrap>
            <ClassComponent data-styled-unwrap />
          </div>,
        );

        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when a Fragment and elements with ignore data attribute are passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(
          <>
            <div data-styled-ignore />
            <ClassComponent />
            <div data-styled-ignore />
          </>,
        );

        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a Fragment and elements in the elementsToIgnore list are passed in", () => {
      it("should return the correct unwrapped element", () => {
        const result = unwrap(
          <>
            <FunctionComponent />
            <ClassComponent />
            <ForwardRefComponent />
          </>,
          { elementsToIgnore: ["FunctionComponent", "ForwardRefComponent"] },
        );

        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });
  });
});
