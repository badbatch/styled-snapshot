import isStyledComponent from ".";
import { ClassComponent, FunctionComponent } from "../../__test__/components";
import { StyledDiv } from "../../__test__/styled";

describe("isStyledComponent", () => {
  describe("invalid elements", () => {
    describe("when a primitive is passed in", () => {
      it("should return false", () => {
        expect(isStyledComponent("div")).toBe(false);
      });
    });

    describe("when a Class component type is passed in", () => {
      it("should return false", () => {
        expect(isStyledComponent(ClassComponent)).toBe(false);
      });
    });

    describe("when a Functional component is passed in", () => {
      it("should return false", () => {
        expect(isStyledComponent(FunctionComponent)).toBe(false);
      });
    });
  });

  describe("valid elements", () => {
    describe("when a Styled Component is passed in", () => {
      it("should return true", () => {
        expect(isStyledComponent(StyledDiv)).toBe(true);
      });
    });
  });
});
