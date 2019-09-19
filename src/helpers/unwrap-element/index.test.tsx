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
      it("should return the unwrapped element", () => {
        const result = unwrapElement(<ContextComponent />, ["ContextComponent", "ContextConsumerComponent"]);
        expect(getElementName(result.element)).toBe("ClassComponent");
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
      it("should return the unwrapped element", () => {
        const result = unwrapElement(<SCContextComponent />, [
          "SCContextComponent",
          "ThemeProvider",
          "WithThemeClassComponent",
        ]);

        expect(getElementName(result.element)).toBe("ClassComponent");
        expect(result.element.props).toEqual({ theme: { type: "light" } });
      });
    });
  });
});
