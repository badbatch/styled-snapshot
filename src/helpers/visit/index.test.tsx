import { ObjectMap } from "@repodog/types";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { has } from "lodash";
import React from "react";
import visit from ".";
import { SerializeComponent } from "../../__test__/components";

describe("visit", () => {
  describe("when run over a serialized component tree", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<SerializeComponent />);
      const serializedTree = toJson(componentTree);
      // @ts-ignore
      expect(visit(serializedTree)).toMatchSnapshot();
    });
  });

  describe("when a visitor is passed in to remove certain data", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<SerializeComponent theme={{ type: "light" }} />);
      const serializedTree = toJson(componentTree);

      const visitor = (node: ObjectMap) => {
        if (has(node, ["props", "theme"])) {
          node.props.theme = null;
        }
      };

      // @ts-ignore
      expect(visit(serializedTree, visitor)).toMatchSnapshot();
    });
  });
});
