import { ReactNode } from "react";
import generateStyledSnapshot from "../generate-styled-snapshot";
import { StyledSnapshotConfig } from "../types";

export default function toMatchStyledSnapshot(
  description: string,
  element: ReactNode,
  options: StyledSnapshotConfig = {},
) {
  const { component, styles } = generateStyledSnapshot(element, options);
  it(`${description}`, () => expect(component).toMatchSnapshot());

  styles.forEach(([displayName, css]) => {
    it(`${description} >> ${displayName}`, () => expect(css).toMatchSnapshot());
  });
}
