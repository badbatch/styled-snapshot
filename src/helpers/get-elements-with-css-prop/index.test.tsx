import { shallow } from "enzyme";
import React from "react";
import getElementsWithCSSProp from ".";
import { SerializeComponent } from "../../__test__/components";

describe("getElementsWithCSSProp", () => {
  describe("when an Enzyme component tree with two components with css/styles props are passed in", () => {
    it("should return the two components", () => {
      const componentTree = shallow(<SerializeComponent />);
      expect(getElementsWithCSSProp(componentTree)).toHaveLength(2);
    });
  });
});
