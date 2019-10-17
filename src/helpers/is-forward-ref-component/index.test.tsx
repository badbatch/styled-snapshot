import React from "react";
import isForwardRefComponent from ".";
import { ForwardRefComponent } from "../../__test__/components";

describe("isForwardRefComponent", () => {
  describe("invalid", () => {
    describe("when a forward ref element is passed in", () => {
      it("should return false", () => {
        expect(isForwardRefComponent(<ForwardRefComponent />)).toBe(false);
      });
    });
  });

  describe("valid", () => {
    describe("when a forward ref component is passed in", () => {
      it("should return true", () => {
        expect(isForwardRefComponent(ForwardRefComponent)).toBe(true);
      });
    });
  });
});
