import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
  return (
    <Container className="mb-3">
      <Row className="p-0 ">
        <Col
          md={5}
          xs={8}
          className=" order-2 order-xl-1 mx-auto position-relative mt-2 mb-0 "
          style={{ maxHeight: "40vh" }}
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
        <Col
          md={7}
          xs={12}
          className=" order-1 order-xl-2 mb-0  mt-2 text-light"
        >
          <div className="name-box">
            <h3
              className="mb-0 equinox-bold animate__animated animate__fadeIn"
              style={{ overflowX: "hidden" }}
            >
              Muhamad Odhie Prasetio
            </h3>
            <h5
              className="mb-1 equinox-regular animate__animated animate__fadeIn"
              style={{ overflowX: "hidden" }}
            >
              Fullstack Web Developer
            </h5>
          </div>
          <p className="animate__fadeIn mt-2">
            I am a Fullstack Web Developer graduate with Bachelor's degree in
            Computer Engineering at the Faculty of Engineering and Computer
            Science, Teknokrat University Indonesia. I love to create new things
            from what I learn, and I am very interested in the IT world,
            especially Web Development.
          </p>
          <a
            href="/CV_Muhamad Odhie Prasetio.pdf"
            target="_blank"
            className="btn cv-btn px-4 py-1"
          >
            CV
          </a>
        </Col>
      </Row>
    </Container>
  );
}
