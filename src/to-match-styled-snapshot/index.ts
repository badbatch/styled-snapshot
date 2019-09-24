import { ReactNode } from "react";
import generateStyledSnapshot from "../generate-styled-snapshot";
import { StyledSnapshotConfig } from "../types";

export default function toMatchStyledSnapshot(element: ReactNode, options: StyledSnapshotConfig = {}) {
  const { component, styles } = generateStyledSnapshot(element, options);
  it(name, () => expect(component).toMatchSnapshot());

  styles.forEach(([displayName, css]) => {
    it(`${name} ${displayName}`, () => expect(css).toMatchSnapshot());
  });
}
