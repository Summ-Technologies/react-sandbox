// This file contains global styles that are used in many places throughout the project

import { CSSProperties } from "react";

const vars = {
  colors: {
    grayText: "#969696",
    purple: "#9F8AFF",
    lightPurple: "#CFC4FF", // lightened by 50 using https://pinetools.com/lighten-color
    white: "#FFFFFF",
    black: "#000000",
    almostBlack: "#434343",
    lightBlue: "#B5CDFB",
    superLightBlue: "#F0F5FE",
  },
};

export const colors = {
  white: vars.colors.white,
  main: vars.colors.purple,
  lightMain: vars.colors.lightPurple,
  black: vars.colors.black,
  lightBlue: vars.colors.lightBlue,
  almostBlack: vars.colors.almostBlack,
  superLightBlue: vars.colors.superLightBlue,
  grayText: vars.colors.grayText,
};

export const header: CSSProperties = {
  fontWeight: 700,
  color: colors.black,
  fontSize: "2.5em",
};

export const header2: CSSProperties = {
  fontWeight: 500,
  color: colors.almostBlack,
  fontSize: "1.1em",
};

export const body: CSSProperties = {
  fontWeight: 300,
  color: colors.almostBlack,
  fontSize: "1em",
};

export const defaultBorderWidth: number = 1;

export const roundedCorners: CSSProperties = {
  borderRadius: "6px",
};

export const defaultBoxShadow: CSSProperties = {
  boxShadow: `0px 1px 4px rgba(0, 0, 0, .25)`,
};

export default {
  header,
  header2,
  body,
  colors,
  defaultBorderWidth,
  defaultBoxShadow,
  roundedCorners,
};
