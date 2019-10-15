import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import toCollateCSS from ".";
import { StyledDiv } from "../../__test__/styled";

describe("toCollateCSS", () => {
  describe("when the styled component does not have the ignore data attribute", () => {
    it("should return true", () => {
      const componentTree = shallow(<StyledDiv />);
      const serializedTree = toJson(componentTree);
      expect(toCollateCSS(serializedTree.props)).toBe(true);
    });
  });

  describe("when the styled component has the ignore data attribute", () => {
    it("should return false", () => {
      const componentTree = shallow(<StyledDiv data-styled-ignore />);
      const serializedTree = toJson(componentTree);
      expect(toCollateCSS(serializedTree.props)).toBe(false);
    });
  });
});
