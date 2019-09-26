import { ObjectMap } from "@repodog/types";
import { has } from "lodash";
import React from "react";
import { ThemeProvider } from "styled-components";
import toMatchStyledSnapshot from ".";
import { SCComponent } from "../__test__/components";

describe("toMatchStyledSnapshot >>", () => {
  describe("component >>", () => {
    const visitor = (node: ObjectMap) => {
      if (has(node, ["props", "theme"])) {
        node.props.theme = null;
      }
    };

    toMatchStyledSnapshot(
      "SCComponent",
      <ThemeProvider theme={{ type: "light" }}>
        <SCComponent />
      </ThemeProvider>,
      {
        elementsToUnwrap: ["ThemeProvider"],
        reactTreeVisitor: visitor,
      },
    );
  });
});
