import React from "react";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";
import FirstComponent from "../components/FirstComponent";

function HomePage() {
  return (
    <Col>
      <FirstComponent />
    </Col>
  );
}
export default withRouter(HomePage);
