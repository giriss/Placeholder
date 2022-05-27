import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

const Explanation = ({ leading, children }: { leading: ReactNode; children: ReactNode }) => (
  <Row style={{marginTop: 50}}>
    <Col>{leading}</Col>
    <Col>{children}</Col>
  </Row>
);

export default Explanation;
