const Header = () => {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
        <div className="container">
          <a className="navbar-brand" href="#home">
            MyPortfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-3">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
