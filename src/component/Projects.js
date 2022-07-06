import { Col, Container, Row, Card } from "react-bootstrap";

export default function Projects() {
  const personal_projects = [
    {
      title: "CodeIgniter 4 Crud Full Ajax Jquery",
      link: "https://github.com/M-OdhieP/CodeIgniter-4-Crud-Full-Ajax-Jquery",
      class: "",
      target: "_blank",
    },
    {
      title: "Latest Personal Project",
      link: "javascript:void(0)",
      class: " bg-dark text-light",
      target: "",
    },
    {
      title: "Istagram UI using reactJS",
      link: "https://m-odhiep.github.io/instagram_ui_using_reactjs/",
      class: "",
      target: "_blank",
    },
    {
      title: "Simple CRUD using reactJS and CodeIgniter 4",
      link: "https://github.com/M-OdhieP/CI4_and_React",
      class: "",
      target: "_blank",
    },
    {
      title: "React Simple Multiple Page With React Router",
      link: "https://m-odhiep.github.io/react-app-multiple-page/",
      class: "",
      target: "_blank",
    },
    {
      title: "React Route Testing Function",
      link: "https://m-odhiep.github.io/react_router/",
      class: "",
      target: "_blank",
    },
    {
      title: "React Simple ToDo List App",
      link: "https://m-odhiep.github.io/ToDo_React_APP/",
      class: "",
      target: "_blank",
    },
    {
      title: "FreeCodeCamp",
      link: "javascript:void(0)",
      class: " bg-dark text-light",
      target: " ",
    },
    {
      title: "FreeCodeCamp Portofolio Webpage",
      link: "https://m-odhiep.github.io/porto-profil-freecodecamp",
      class: "",
      target: "_blank",
    },
    {
      title: "FreeCodeCamp Technical Documentation Page",
      link: "https://m-odhiep.github.io/documentation-page/",
      class: "",
      target: "_blank",
    },
    {
      title: "FreeCodeCamp Product Landing Page",
      link: "https://m-odhiep.github.io/Product-Landing-Page/",
      class: "",
      target: "_blank",
    },
    {
      title: "FreeCodeCamp Survey Form",
      link: "https://m-odhiep.github.io/blackpink-survey/",
      class: "",
      target: "_blank",
    },
    {
      title: "FreeCodeCamp Tribute Page",
      link: "https://m-odhiep.github.io/blackpink-tribute/",
      class: "",
      target: "_blank",
    },
  ];

  const projects = [
    {
      img_link: "/img/projects/polda-bengkulu.webp",
      title: "POLDA BENGKULU",
      content:
        " redesign the Bengkulu regional police website according to the desired design and create a content management system for the regional police website content.",
    },
    {
      img_link: "/img/projects/web-dprd-tanggamus.webp",
      title: "DPRD Tanggamus",
      content:
        "adding features to the website of the Tanggamus Regional People's Representative Council in the form of a new appearance or function as well as fixing bugs in the system.",
    },
  ];

  return (
    <Container id="projects" className="mt-4 text-light ">
      <h1 className="equinox-bold">Work Projects</h1>
      <Row className="p-0">
        {projects.map((project) => {
          return (
            <Col md={6} className="mb-2" data-aos={"fade-in"}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={4} className="mb-2 projects-img-container">
                      <img
                        className="project-img img-fluid"
                        src={project.img_link}
                      />
                    </Col>
                    <Col md={8} className="align-self-center">
                      <h4>{project.title}</h4>
                      <p>{project.content}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <h1
        className="mt-3 text-center equinox-bold"
        data-aos={"fade-in"}
        id="Project"
      >
        Latest Personal Project
      </h1>

      <div className="list-group text-center">
        {personal_projects.map((personal) => {
          return (
            <a
              href={personal.link}
              className={
                "list-group-item list-group-item-action" + personal.class
              }
              target={personal.target}
            >
              {personal.title}
            </a>
          );
        })}
      </div>
    </Container>
  );
}
