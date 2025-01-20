import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container">
        <div className="nav_box">
          <div className="nav_logo">
            <h2>{'</>'}</h2>
            <h1>FRONT-END</h1>
            <h2>DEVELOPER</h2>
          </div>

          <ul className={`nav_list ${isMenuOpen ? 'open' : ''}`}>
            <li className="nav_list1">
              <a href="#about" className="nav_link">About</a>
            </li>
            <li className="nav_list1">
              <a href="#skill" className="nav_link">Skill</a>
            </li>
            <li className="nav_list1">
              <a href="#project" className="nav_link">Project</a>
            </li>
            <li className="nav_list1">
              <a href="#contact" className="nav_link">Contact</a>
            </li>
            <li>
              <button className="btn">
                <a  download="pdf.pdf" href="pdf.pdf">Download</a>
              </button>
            </li>
          </ul>

          <button
            className={`menu_icon ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
