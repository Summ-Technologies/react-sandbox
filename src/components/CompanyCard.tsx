import React, { CSSProperties } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import defaultStyles from "../styles";
import Button from "./Button";
import LogoBox from "./LogoBox";
import Rating from "./Rating";

export default function FirstComponent() {
  let styles: { [key: string]: CSSProperties } = {
    container: {
      width: 450,
      height: 309,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      ...defaultStyles.defaultBoxShadow,
      ...defaultStyles.roundedCorners,
    },
    headerRow: {
      display: "flex",
      paddingTop: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },
    headerTextAndRating: {
      display: "flex",
      justifyContent: "space-between",
    },
    companyNameText: {
      fontSize: 22,
      fontWeight: "bold",
      paddingBottom: 6,
    },
    companyTypeText: {
      paddingBottom: 6,
      fontWeight: "bold",
    },
    bodyRow: {
      paddingTop: 12,
      paddingLeft: 12,
      paddingRight: 12,
    },
    pricingTextContainer: {
      paddingTop: 12,
      paddingBottom: 5,
    },
    saveText: {
      color: "#75AF5A",
      paddingTop: 12,
    },
    bottomContainer: {
      height: 75,
      paddingLeft: 12,
      paddingRight: 12,
      backgroundColor: defaultStyles.colors.superLightBlue,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    dealTextContainer: {},
    dealButtonContainer: { height: 40, paddingRight: 12 },
  };

  function onClick() {}

  return (
    <div style={styles.container}>
      <Row style={styles.headerRow}>
        <Col>
          <LogoBox />
        </Col>
        <Col style={{ paddingLeft: 10, flexGrow: 1 }}>
          <div style={styles.headerTextAndRating}>
            <div style={styles.companyNameText}>Pulley</div>
            <Rating numReviews={12} rating={4.3} />
          </div>
          <div style={styles.companyTypeText}>Cap table</div>
          <div style={styles.companyTaglineText}>
            Peace of mind for your cap table
          </div>
        </Col>
      </Row>
      <Row style={styles.bodyRow}>
        <div>
          Carta helps companies maintain their cap tables. Use our platform to
          issue employee & investor equity and maintain accurate ownership
          records as your company scales. Sign up today and leave cap table
          frustration in the past.
        </div>
        <div style={styles.pricingTextContainer}>
          <div style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
            Entry level price:
          </div>
          Free until 25 stakeholders then $10/stakeholder forever and ever
        </div>
      </Row>
      <Row style={styles.bottomContainer}>
        <Col style={styles.dealTextContainer}>
          20% discount + concierge onboarding
          <div style={styles.saveText}>Save $1200</div>
        </Col>
        <Col style={styles.dealButtonContainer}>
          <Button text="Get the deal" onClick={onClick} />
        </Col>
      </Row>
    </div>
  );
}
