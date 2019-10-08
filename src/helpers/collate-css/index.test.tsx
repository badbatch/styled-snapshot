import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import collateCSS from ".";
import { StyledItem } from "../../__test__/styled";

describe("collateCSS", () => {
  describe.only("when theme is passed in as true", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<StyledItem />);
      const serializedTree = toJson(componentTree);
      // @ts-ignore
      const { formatted } = collateCSS(serializedTree, { theme: true });
      expect(formatted).toMatchSnapshot();
    });
  });

  describe("when theme is passed in as false", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<StyledItem />);
      const serializedTree = toJson(componentTree);
      // @ts-ignore
      const { formatted } = collateCSS(serializedTree, { theme: false });
      expect(formatted).toMatchSnapshot();
    });
  });
});
