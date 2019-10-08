import { ObjectMap } from "@repodog/types";
import { has } from "lodash";
import React from "react";
import { ThemeProvider } from "styled-components";
import toMatchStyledSnapshot from ".";
import { SCComponent, SerializeComponent } from "../__test__/components";

describe("toMatchStyledSnapshot >>", () => {
  describe("SCComponent >>", () => {
    const visitor = (node: ObjectMap) => {
      if (has(node, ["props", "theme"])) {
        node.props.theme = null;
      }
    };

    toMatchStyledSnapshot(
      "component",
      <ThemeProvider theme={{ type: "light" }}>
        <SCComponent />
      </ThemeProvider>,
      {
        elementsToUnwrap: ["ThemeProvider"],
        reactTreeVisitor: visitor,
      },
    );
  });

  describe("SerializeComponent >>", () => {
    const visitor = (node: ObjectMap) => {
      if (has(node, ["props", "theme"])) {
        node.props.theme = null;
      }
    };

    toMatchStyledSnapshot("component", <SerializeComponent />, {
      reactTreeVisitor: visitor,
    });
  });
});
