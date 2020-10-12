import React, { CSSProperties } from "react";
import defaultStyles from "../styles";

type DetailPageHeaderProps = {
  title: string;
};

export default function DetailPageHeader(props: DetailPageHeaderProps) {
  let styles: { [key: string]: CSSProperties } = {
    headerText: {
      ...defaultStyles.header2,
    },
    underline: {
      height: 4,
      backgroundColor: defaultStyles.colors.main,
    },
  };
  return (
    <div style={{ display: "inline-block" }}>
      <div style={styles.headerText}>{props.title}</div>
      <div style={styles.underline} />
    </div>
  );
}
