import React from "react";
import unwrapElement from ".";
import {
  ClassComponent,
  ContextComponent,
  ContextProviderComponent,
  ForwardRefComponent,
  MemoComponent,
  PortalComponent,
  SCContextComponent,
} from "../../__test__/components";
import { UnwrapElementResult } from "../../types";
import getElementName from "../get-element-name";

describe("unwrapElement", () => {
  describe("element types to unwrap", () => {
    describe("when a ClassComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrapElement(<ClassComponent />, ["ClassComponent"]);
        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when a ContextComponent element is passed in", () => {
      let result: UnwrapElementResult;

      it("should return the unwrapped element", () => {
        result = unwrapElement(<ContextComponent />, ["ContextComponent", "ContextConsumerComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });

      it("should have the theme in the element props", () => {
        expect(result.element.props).toEqual({ value: "dark" });
      });
    });

    describe("when a ContextProviderComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrapElement(<ContextProviderComponent />, ["ContextProviderComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a ForwardRef element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrapElement(<ForwardRefComponent />, ["ForwardRefComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a FunctionalComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrapElement(<ContextProviderComponent />, ["ContextProviderComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a MemoComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrapElement(<MemoComponent />, ["MemoComponent"]);
        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });

    describe("when a PortalComponent element is passed in", () => {
      it("should return the unwrapped element", () => {
        const result = unwrapElement(<PortalComponent />, ["PortalComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
      });
    });

    describe("when a SCContextComponent element is passed in", () => {
      let result: UnwrapElementResult;

      beforeAll(() => {
        result = unwrapElement(<SCContextComponent />, [
          "SCContextComponent",
          "ThemeProvider",
          "WithThemeClassComponent",
        ]);
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
        const result = unwrapElement(
          <div data-styled-unwrap>
            <ClassComponent data-styled-unwrap />
          </div>,
        );

        expect(getElementName(result.element)).toBe("FunctionComponent");
      });
    });
  });
});
