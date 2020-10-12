import React, { CSSProperties } from "react";
import defaultStyles from "../styles";

export default function LogoBox() {
  let styles: { [key: string]: CSSProperties } = {
    logoBoxContainer: {
      width: 75,
      height: 75,
      ...defaultStyles.defaultBoxShadow,
      ...defaultStyles.roundedCorners,
    },
  };
  return <div style={styles.logoBoxContainer}></div>;
}
