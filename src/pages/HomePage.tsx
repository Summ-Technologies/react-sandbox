import React from "react";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import CompanyCard from "../components/CompanyCard";
import DetailPageHeader from "../components/DetailPageHeader";
import ReviewStars from "../components/ReviewStars";

function HomePage() {
  return (
    <Col>
      <CompanyCard />
      <DetailPageHeader title={"About"} />
      <ReviewStars numStars={4} />
    </Col>
  );
}
export default withRouter(HomePage);
