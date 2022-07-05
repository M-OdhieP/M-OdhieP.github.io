import Helmet from "react-helmet";
import Navigate from "./component/Navigate";
import Header from "./component/Header";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import AOS from "aos";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/css/style.css";
import "aos/dist/aos.css";
import "animate.css";

function App() {
  const TITLE = "Muhamad Odhie Prasetio";
  AOS.init();
  return (
    <div className="App mb-4">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      {/* <img className="matrix" src="/img/component/matrix.gif" alt="" /> */}
      <Navigate />
      <Header />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
