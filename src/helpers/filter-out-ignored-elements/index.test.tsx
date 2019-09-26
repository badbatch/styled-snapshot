import React from "react";
import filterOutIgnoredElements from ".";
import { ClassComponent, FunctionComponent, SCComponent, SerializeComponent } from "../../__test__/components";
import { ComponentTypeElement } from "../../types";
import getElementName from "../get-element-name";

describe("filterOutIgnoredElements", () => {
  describe("when three of four elements have the ignore data attribute", () => {
    it("should return the one without the attribute", () => {
      const [element] = filterOutIgnoredElements([
        <div data-styled-ignore />,
        <FunctionComponent />,
        <div data-styled-ignore />,
        <ClassComponent data-styled-ignore />,
      ]);

      expect(getElementName(element as ComponentTypeElement)).toBe("FunctionComponent");
    });
  });

  describe("when three of four elements are in the elementsToIgnore list", () => {
    it("should return the one that is not in the list", () => {
      const [element] = filterOutIgnoredElements(
        [<SCComponent />, <FunctionComponent />, <SerializeComponent />, <ClassComponent />],
        ["SCComponent", "SerializeComponent", "ClassComponent"],
      );

      expect(getElementName(element as ComponentTypeElement)).toBe("FunctionComponent");
    });
  });
});
