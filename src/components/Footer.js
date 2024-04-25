import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1 style={{ fontWeight: "revert", color: "#FFFFFF" }}> M Shayan Shakeel</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a target="__blank" href="https://www.linkedin.com/in/m-shayan-shakeel-795899203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={navIcon1} alt="" /></a>
              {/* <a target="__blank" href=""><img src={navIcon2} alt="" /></a> */}
              <a target="__blank" href="https://www.instagram.com/mshayanabbasi/?igsh=ZGo1ZmJ3MGU0Y3Bz"><img src={navIcon3} alt="" /></a>

            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
