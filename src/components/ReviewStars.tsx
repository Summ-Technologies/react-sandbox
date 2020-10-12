import React, { CSSProperties } from "react";
import starEmpty from "../icons/starEmpty.svg";
import starFilled from "../icons/starFilled.svg";

type ReviewStarsProps = {
  numStars: number;
};

export default function ReviewStars(props: ReviewStarsProps) {
  let styles: { [key: string]: CSSProperties } = {
    container: {
      display: "inline-block",
    },
  };
  return (
    <div style={styles.container}>
      {[...Array(props.numStars)].map((value: undefined, index: number) => (
        <img
          src={starFilled}
          style={{ width: 18, height: 18 }}
          key={index}
          alt={"star filled"}
        />
      ))}
      {[...Array(5 - props.numStars)].map((value: undefined, index: number) => (
        <img
          src={starEmpty}
          style={{ width: 18, height: 18 }}
          alt={"star empty"}
        />
      ))}
    </div>
  );
}
