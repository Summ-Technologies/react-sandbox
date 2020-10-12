import React, { CSSProperties } from "react";
import starFilled from "../icons/starFilled.svg";
import defaultStyles from "../styles";

type RatingProps = {
  numReviews: number;
  rating: number;
};

export default function Rating(props: RatingProps) {
  let styles: { [key: string]: CSSProperties } = {
    button: {
      textAlign: "center",
      color: defaultStyles.colors.white,
      backgroundColor: defaultStyles.colors.main,
      ...defaultStyles.roundedCorners,
      height: "100%",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
      paddingLeft: 5, // essentially min padding
      paddingRight: 5,
    },
    hovered: {
      textDecoration: "underline",
    },
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
