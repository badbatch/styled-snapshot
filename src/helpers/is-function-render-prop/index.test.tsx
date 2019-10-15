import React from "react";
import isFunctionRenderProp from ".";
import { StyledDiv } from "../../__test__/styled";

describe("isFunctionRenderProp", () => {
  describe("when the function does not include jsx", () => {
    it("should return false", () => {
      expect(isFunctionRenderProp(() => null)).toBe(false);
    });
  });

  describe("when the function includes jsx", () => {
    it("should return true", () => {
      expect(isFunctionRenderProp(() => <StyledDiv />)).toBe(true);
    });
  });
});
