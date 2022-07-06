export default function Navigate() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  ">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* <img src="/img/icon.png" className="icon" />  */}
          m-odhiep.github.io
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link " href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#projects">
              Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
