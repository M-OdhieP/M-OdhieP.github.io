import { Container, Row, Col, Card } from "react-bootstrap";

export default function Experience() {
  return (
    <Container id="experience" className="mt-4">
      <Row className="text-light p-0">
        <h1 className="equinox-bold">Experience & Achievement</h1>
        <Col md={12} className="mb-2">
          <Card>
            <Card.Header>
              <h4 className=" equinox-bold">
                CV Cinda Logika Grafia - Full Stack Web Developer
              </h4>
              <p className="mb-0">February 2022 - Present</p>
            </Card.Header>
            <Card.Body>
              <p>
                Fullstack Web Developer in charge of creating or managing
                web-based applications, both front-end and back-end according to
                client needs
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-2" data-aos={"fade-in"}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} xs={5} className="mb-2 m-auto">
                  <img
                    className="img-fluid achievement-img glitch position-relative"
                    src="/img/odhie/t1.png"
                    loading="lazy"
                    decoding="async"
                  />
                </Col>
                <Col md={9} className="align-self-center">
                  <h4>Regional Selection ASC XIII</h4>
                  <p>
                    1st Place in the Regional Selection of Candidates for ASEAN
                    Skills Competition XIII Vocational Internet Of Things in
                    Lampung Province
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-2" data-aos={"fade-in"}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3} xs={5} className="mb-2 m-auto">
                  <img
                    className="img-fluid achievement-img glitch position-relative"
                    src="/img/odhie/t3.png"
                    loading="lazy"
                    decoding="async"
                  />
                </Col>
                <Col md={9} className="align-self-center">
                  <h4>National Selection ASC XIII</h4>
                  <p>
                    3rd Place in the National Selection of Competitors in the
                    ASEAN Skills Competition XIII Vocational Internet of Things
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
