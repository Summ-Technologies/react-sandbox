import React from "react";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import CompanyCard from "../components/CompanyCard";

function HomePage() {
  return (
    <Col>
      <CompanyCard />
    </Col>
  );
}
export default withRouter(HomePage);
