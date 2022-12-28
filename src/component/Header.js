import { Col, Container, Row } from 'react-bootstrap'

export default function Header() {
  return (
    <Container className="mb-3">
      <Row className="p-0 ">
        <Col
          md={5}
          xs={8}
          className=" order-2 order-xl-1 mx-auto position-relative mt-2 mb-0 "
          style={{ maxHeight: '40vh' }}
        >
          <img
            className="centered img-fluid shape-img "
            src="/img/odhie/shape.png"
            decoding="async"
            alt=""
          />
          <img
            className="img-odhie position-relative"
            src="/img/odhie/odhie.png"
            decoding="async"
            alt=""
          />
        </Col>
        <Col
          md={7}
          xs={12}
          className=" order-1 order-xl-2 mb-0  mt-2 text-light"
        >
          <div className="name-box no-select">
            <h3
              className="mb-0 equinox-bold animate__animated animate__fadeIn"
              style={{ overflowX: 'hidden' }}
            >
              Muhamad Odhie Prasetio
            </h3>
            <h5
              className="mb-1 equinox-regular animate__animated animate__fadeIn cool-text"
              style={{ overflowX: 'hidden' }}
            >
              Fullstack Web Developer
            </h5>
          </div>
          <div className="animate__fadeIn mt-2 no-select">
            <p className="intro">
              I am a Fullstack Web Developer with a Bachelor's degree in
              Computer Engineering from the Faculty of Engineering and Computer
              Science at Teknokrat University Indonesia. Throughout my studies,
              I have gained a strong foundation in computer science and
              engineering principles, and I have developed advanced skills in
              web development through various coursework and hands-on projects.
            </p>
            <p className="intro">
              As a web developer, I have a passion for creating and am
              particularly interested in the field of IT. I am always eager to
              learn and apply my knowledge to create new and innovative
              projects. My skills include proficiency in HTML, CSS, JavaScript,
              and various web development frameworks such as React and Angular.
              I have also gained experience working on both front-end and
              back-end development projects, and I am comfortable with a variety
              of databases and server-side languages.
            </p>
          </div>
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
  )
}
