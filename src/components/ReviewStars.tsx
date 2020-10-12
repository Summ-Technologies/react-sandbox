import React, { CSSProperties } from "react";
import starEmpty from "../icons/starEmpty.svg";
import starFilled from "../icons/starFilled.svg";

type ReviewStarsProps = {
  numStars: number;
};

export default function ReviewStars(props: ReviewStarsProps) {
  let styles: { [key: string]: CSSProperties } = {
    text: { paddingLeft: 5 },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.container}>
      <img src={starFilled} style={{ width: 18, height: 18 }} alt={"star"} />
      <img src={starFilled} style={{ width: 18, height: 18 }} alt={"star"} />
      <img src={starFilled} style={{ width: 18, height: 18 }} alt={"star"} />
      <img src={starFilled} style={{ width: 18, height: 18 }} alt={"star"} />
      <img src={starEmpty} style={{ width: 18, height: 18 }} alt={"star"} />
    </div>
  );
}
