import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
        <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">WHY CHOOSE US</h2>
          </Col>

         
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
