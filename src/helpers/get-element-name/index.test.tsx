import React from "react";
import getElementName from ".";
import { ClassComponent, FunctionComponent } from "../../__test__/components";

describe("getElementName", () => {
  describe("when a Class component type is passed in", () => {
    it("should return the element name", () => {
      expect(getElementName(<ClassComponent />)).toBe("ClassComponent");
    });
  });

  describe("when a Functional component is passed in", () => {
    it("should return the element name", () => {
      expect(getElementName(<FunctionComponent />)).toBe("FunctionComponent");
    });
  });
});
