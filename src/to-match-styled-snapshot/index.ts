import { ReactNode } from "react";
import generateStyledSnapshot from "../generate-styled-snapshot";
import { StyledSnapshotConfig } from "../types";

export default function toMatchStyledSnapshot(element: ReactNode, options: StyledSnapshotConfig = {}) {
  const { component, children } = generateStyledSnapshot(element, options);
  it(name, () => expect(component).toMatchSnapshot());

  children.forEach(([displayName, child]) => {
    it(`${name} ${displayName}`, () => expect(child).toMatchSnapshot());
  });
}
