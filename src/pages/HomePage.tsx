import React from "react";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import CompanyCard from "../components/CompanyCard";
import DetailPageHeader from "../components/DetailPageHeader";
import FounderReview from "../components/FounderReview";

function HomePage() {
  return (
    <Col>
      <CompanyCard />
      <DetailPageHeader title={"About"} />
      <FounderReview
        numStars={4}
        date={"September 2020"}
        name={"Brandon, founder of series A startup"}
        reviewText={
          "I love pulley it's so great and I really enjoy it a lot! I especially like how fast we were able to get set up on Pulley's platform"
        }
      />
    </Col>
  );
}
export default withRouter(HomePage);
