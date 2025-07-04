import React from "react";

export const Header = () => {
  return (
    <header>
      <img src="#" alt="Photo of Jacqui smiling" className="photo" />
      <h1>Jacqui Keating</h1>
      <p className="job-title">Full-Stack Developer</p>
      <a href="#" target="_blank" className="website-link">
        jacquidoesnothaveadomainrightnow.com
      </a>
      <div className="buttons-container">
        <a href="mailto:j.keating@live.ca" className="btn-link">
          <button>
            <i className="fa-solid fa-envelope btn-icon"></i>
            Email
          </button>
          l
        </a>
        <a href="linkedin.com" target="_blank" className="btn-link">
          <button className="cta-btn">
            <i className="fa-brands fa-linkedin btn-icon"></i>
            LinkedIn
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
