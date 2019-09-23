import { shallow } from "enzyme";
import React from "react";
import getStyledComponents from ".";
import { SCComponent } from "../../__test__/components";

describe("getStyledComponents", () => {
  describe("when an Enzyme component tree with six styled components is passed in", () => {
    it("should return the six components", () => {
      const componentTree = shallow(<SCComponent />);
      expect(getStyledComponents(componentTree)).toHaveLength(6);
    });
  });
});
