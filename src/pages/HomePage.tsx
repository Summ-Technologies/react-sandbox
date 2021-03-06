import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { withRouter } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import CompanyCard from "../components/CompanyCard";
import DetailPageHeader from "../components/DetailPageHeader";
import FounderReview from "../components/FounderReview";
function HomePage() {
  return (
    <Col>
      <CompanyCard />
      <DetailPageHeader title={"About"} />
      <Row>
        <FounderReview
          numStars={4}
          date={"September 2020"}
          name={"Brandon, founder of series A startup"}
          reviewText={
            "I love pulley it's so great and I really enjoy it a lot! I especially like how fast we were able to get set up on Pulley's platform"
          }
        />
      </Row>
      <Row>
        <Checkbox label={"input checkbox"} checked={false} />
      </Row>
    </Col>
  );
}
export default withRouter(HomePage);
