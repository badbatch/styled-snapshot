import React from "react";
import hasUnwrapDataAttribute from ".";
import { FunctionComponent } from "../../__test__/components";
import { StyledDiv } from "../../__test__/styled";

describe("hasUnwrapDataAttribute", () => {
  describe("when an element does not have the attribute", () => {
    describe("when a Styled Component is passed in", () => {
      it("should return false", () => {
        expect(hasUnwrapDataAttribute(<StyledDiv />)).toBe(false);
      });
    });

    describe("when a dom element is passed in", () => {
      it("should return false", () => {
        expect(hasUnwrapDataAttribute(<div />)).toBe(false);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return false", () => {
        expect(hasUnwrapDataAttribute(<FunctionComponent />)).toBe(false);
      });
    });
  });

  describe("valid elements", () => {
    describe("when a Styled Component is passed in", () => {
      it("should return true", () => {
        expect(hasUnwrapDataAttribute(<StyledDiv data-styled-unwrap />)).toBe(true);
      });
    });

    describe("when a dom element is passed in", () => {
      it("should return true", () => {
        expect(hasUnwrapDataAttribute(<div data-styled-unwrap />)).toBe(true);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return true", () => {
        expect(hasUnwrapDataAttribute(<FunctionComponent data-styled-unwrap />)).toBe(true);
      });
    });
  });
});
