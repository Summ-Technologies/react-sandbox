import React, { CSSProperties } from "react";
import starFilled from "../icons/starFilled.svg";

type RatingProps = {
  numReviews: number;
  rating: number;
};

export default function Rating(props: RatingProps) {
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
      <div style={styles.text}>
        {props.rating}/5 ({props.numReviews})
      </div>
    </div>
  );
}
