import React from "react";
import unwrap from ".";
import {
  ClassComponent,
  ContextComponent,
  ContextProviderComponent,
  ForwardRefComponent,
  MemoComponent,
  PortalComponent,
  SCContextComponent,
} from "../../__test__/components";
import { UnwrapResult } from "../../types";
import getElementName from "../get-element-name";

describe("unwrap", () => {
  describe("element types to unwrap", () => {
    describe("when a ClassComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrap(<ClassComponent />, ["ClassComponent"]);
        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when a ContextComponent element is passed in", () => {
      let result: UnwrapResult;

      it("should return the unwrapped element", () => {
        result = unwrap(<ContextComponent />, ["ContextComponent", "ContextConsumerComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });

      it("should have the theme in the element props", () => {
        expect(result.element.props).toEqual({ value: "dark" });
      });
    });

    describe("when a ContextProviderComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrap(<ContextProviderComponent />, ["ContextProviderComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a ForwardRef element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrap(<ForwardRefComponent />, ["ForwardRefComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a FunctionalComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrap(<ContextProviderComponent />, ["ContextProviderComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a MemoComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrap(<MemoComponent />, ["MemoComponent"]);
        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when a PortalComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrap(<PortalComponent />, ["PortalComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a SCContextComponent element is passed in", () => {
      let result: UnwrapResult;

      beforeAll(() => {
        result = unwrap(<SCContextComponent />, ["SCContextComponent", "ThemeProvider", "WithThemeClassComponent"]);
      });

      it("should return the unwrapped element", () => {
        expect(getElementName(result.element)).toBe("ClassComponent");
      });

      it("should have the theme in the element props", () => {
        expect(result.element.props).toEqual({ theme: { type: "light" } });
      });
    });

    describe("when an element with nowrap data attribute is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrap(
          <div data-styled-unwrap>
            <ClassComponent data-styled-unwrap />
          </div>,
        );

        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when a Fragment element and elements with ignore data attribute are passed in", () => {
      it("should return the unwrapped element", () => {
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
  });
});
