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
              <p className="intro">
                Fullstack Web Developer plays a key role in the development and
                maintenance of web-based applications. They are responsible for
                designing and building the user interface (front-end) of a
                website or application, as well as implementing and managing the
                technical infrastructure (back-end) that supports it including:
              </p>
              <ul className="experience-list">
                <li>
                  Designing and building the front-end of web-based applications
                  using HTML, CSS, and JavaScript
                </li>
                <li>
                  Implementing and managing the back-end of web-based
                  applications, including servers, databases, and APIs
                </li>
                <li>
                  Ensuring web-based applications are secure, scalable, and
                  performant
                </li>
                <li>
                  Collaborating with designers, project managers, and other
                  stakeholders to understand and implement their vision
                </li>
                <li>
                  Troubleshooting and debugging issues with web-based
                  applications
                </li>
                <li>
                  Staying up-to-date with the latest web development
                  technologies and best practices
                </li>
                <li>
                  Continuously improving and evolving web-based applications in
                  response to changing client needs and technologies
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Header>
              <h4 className="equinox-bold">
                Web Commerce Communications - PHP Developer
              </h4>
              <p className="mb-0">March 2023 - Present</p>
            </Card.Header>
            <Card.Body>
              <p className="intro">
                As a PHP Developer at Web Commerce Communications, I contribute
                to the development and maintenance of web-based applications. My role
                involves working with technologies such as WHMCS, Laravel, and Vue.js to
                ensure seamless integration and functionality.
              </p>
              <ul className="experience-list">
                <li>
                  Designing and building the front-end of web-based applications using
                  HTML, CSS, and JavaScript, with a focus on user-friendly interfaces.
                </li>
                <li>
                  Implementing and managing the back-end of web-based applications,
                  including servers, databases, and APIs, to ensure optimal performance
                  and functionality.
                </li>
                <li>
                  Collaborating with cross-functional teams, including designers, project
                  managers, and stakeholders, to understand and implement project
                  requirements.
                </li>
                <li>
                  Creating custom modules for WHMCS, extending its functionality and
                  providing tailored solutions to meet specific client needs.
                </li>
                <li>
                  Ensuring the security, scalability, and performance of web-based
                  applications through rigorous testing and optimization processes.
                </li>
                <li>
                  Troubleshooting and debugging issues with web-based applications,
                  providing timely solutions to ensure uninterrupted user experience.
                </li>
                <li>
                  Keeping up-to-date with the latest web development technologies and
                  best practices, incorporating them into the development workflow.
                </li>
                <li>
                  Continuously improving and evolving web-based applications in response
                  to changing client needs and advancements in web technologies.
                </li>
              </ul>
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
