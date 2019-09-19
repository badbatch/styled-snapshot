import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import visit from ".";
import { SerializeComponent } from "../../__test__/components";

describe("visit", () => {
  describe("when run over a serialized component tree", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<SerializeComponent />);
      const serializedTree = toJson(componentTree);
      expect(visit(serializedTree)).toMatchSnapshot();
    });
  });
});
