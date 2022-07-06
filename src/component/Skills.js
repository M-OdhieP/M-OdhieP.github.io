import { Container, Row, Col, Card } from "react-bootstrap";

export default function Skills() {
  const skills = [
    { img_link: "html.png", name: "HTML" },
    { img_link: "css.png", name: "CSS" },
    { img_link: "js.png", name: "Javascript" },
    { img_link: "react.png", name: "React JS" },
    { img_link: "php.png", name: "PHP" },
    { img_link: "codeigniter.png", name: "CodeIgniter" },
    { img_link: "laravel.png", name: "Laravel" },
    { img_link: "bootstrap.png", name: "Bootstrap" },
    { img_link: "tailwindcss.png", name: "Tailwind CSS" },
    { img_link: "phpmyadmin.png", name: "PHPMyAdmin" },
    { img_link: "mysql.png", name: "MySQL" },
    { img_link: "restful-api.png", name: "Restful API" },
  ];

  return (
    <Container id="skills" className="text-light mt-4 ">
      <h1 className="equinox-bold">Skills & Tools</h1>
      <Row className="text-center justify-content-center p-0">
        {skills.map((skill) => {
          return (
            <Col md={4} xs={6} className="p-1" data-aos={"fade-up"}>
              <div className="card h-100">
                <div className="card-body skills-container">
                  <img
                    src={"/img/skills/" + skill.img_link}
                    className="img-fluid skills-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="skills-text">
                    <h2>{skill.name}</h2>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
