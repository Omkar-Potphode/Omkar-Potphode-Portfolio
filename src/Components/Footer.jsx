import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/OmLogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="OmLogo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end"><br/><br/>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/omkar-potphode-497b63237/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/omkar.potphode.545"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/_om__kar_p?utm_source=qr&igshid=OGIxMTE0OTdkZA=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2021. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
