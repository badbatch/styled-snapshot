import { ObjectMap } from "@repodog/types";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { has } from "lodash";
import React from "react";
import visit from ".";
import { SerializeComponent } from "../../__test__/components";
import { SerializedTree } from "../../types";

describe("visit", () => {
  describe("when run over a serialized component tree", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<SerializeComponent />);
      const serializedTree = toJson(componentTree);
      expect(visit(serializedTree as SerializedTree, {})).toMatchSnapshot();
    });
  });

  describe("when a visitor is passed in to remove certain data", () => {
    it("should return the correct structure", () => {
      const componentTree = shallow(<SerializeComponent theme={{ type: "light" }} />);
      const serializedTree = toJson(componentTree);

      const reactTreeVisitor = (node: ObjectMap) => {
        if (has(node, ["props", "theme"])) {
          node.props.theme = null;
        }
      };

      expect(visit(serializedTree as SerializedTree, { reactTreeVisitor })).toMatchSnapshot();
    });
  });
});
