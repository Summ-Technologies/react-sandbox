import React, { CSSProperties } from "react";
import defaultStyles from "../styles";
import ReviewStars from "./ReviewStars";

type FounderReviewProps = {
  reviewText: string;
  numStars: number;
  name: string;
  date: string;
};

export default function FounderReview(props: FounderReviewProps) {
  let styles: { [key: string]: CSSProperties } = {
    container: { display: "inline-block" },
    nameText: { fontWeight: "bold" },
    dateText: {
      color: defaultStyles.colors.grayText,
      fontWeight: 500,
      fontSize: 14,
      paddingTop: 4,
      paddingBottom: 4,
    },
    reviewText: { paddingTop: 4, fontSize: 14 },
  };
  return (
    <div style={styles.container}>
      <div style={styles.nameText}>{props.name}</div>
      <div style={styles.dateText}>{props.date}</div>
      <ReviewStars numStars={props.numStars} />
      <div style={styles.reviewText}>{props.reviewText}</div>
    </div>
  );
}
