import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
  return (
    <Container className="mb-3">
      <Row>
        <Col
          className="section-1 order-2 order-xl-1 m-auto position-relative"
          xs={8}
          md={5}
        >
          <img
            className="centered img-fluid shape-img "
            src="/img/odhie/shape.png"
            alt=""
          />
          <img
            className="img-odhie position-relative glitch"
            src="/img/odhie/odhie.png"
            alt=""
          />
        </Col>
        <Col className="section-1 order-1 order-xl-2 mb-4" xs={12} md={7}>
          <h3 className="text-light mt-2 mb-0 equinox-bold animate__animated animate__fadeInRightBig">
            Muhamad Odhie Prasetio
          </h3>
          <h5 className="pb-2 border-bottom text-light equinox-regular animate__animated animate__fadeInRightBig">
            Fullstack Web Developer
          </h5>
          <p className="text-light mt-3 fs-5 animate__fadeIn">
            I am a Fullstack Web Developer graduate with Bachelor's degree in
            Computer Engineering at the Faculty of Engineering and Computer
            Science, Teknokrat University Indonesia. I love to create new things
            from what I learn, and I am very interested in the IT world,
            especially Web Development.
          </p>
          <a
            href="/CV_Muhamad Odhie Prasetio.pdf"
            target="_blank"
            className="btn cv-btn px-4 py-1 "
          >
            CV
          </a>
        </Col>
      </Row>
    </Container>
  );
}
