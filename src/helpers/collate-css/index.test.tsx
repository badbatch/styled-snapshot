import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { collatePropsCSS, collateStyledCSS } from ".";
import { StyledItem, StyledList, listStyles } from "../../__test__/styled";

describe("collateStyledCSS", () => {
  describe("when theme is passed in as true", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<StyledItem />);
      const serializedTree = toJson(componentTree);
      // @ts-ignore
      const { formatted } = collateStyledCSS(serializedTree, { theme: true });
      expect(formatted).toMatchSnapshot();
    });
  });

  describe("when theme is passed in as false", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<StyledItem />);
      const serializedTree = toJson(componentTree);
      // @ts-ignore
      const { formatted } = collateStyledCSS(serializedTree, { theme: false });
      expect(formatted).toMatchSnapshot();
    });
  });
});

describe("collatePropsCSS", () => {
  describe("when theme is passed in as true", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<StyledList css={listStyles} theme />);
      // @ts-ignore
      const { formatted } = collatePropsCSS(componentTree.props());
      expect(formatted).toMatchSnapshot();
    });
  });

  describe("when theme is passed in as false", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<StyledList css={listStyles} />);
      // @ts-ignore
      const { formatted } = collatePropsCSS(componentTree.props());
      expect(formatted).toMatchSnapshot();
    });
  });
});
