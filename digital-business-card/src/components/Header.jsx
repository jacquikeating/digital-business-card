import React from "react";

export const Header = () => {
  return (
    <header>
      <img src="#" alt="Photo of Jacqui smiling" className="photo" />
      <h1>Jacqui Keating</h1>
      <p className="job-title">Full-Stack Developer</p>
      <a href="#" target="_blank" className="website">
        jacquidoesnothaveadomainrightnow.com
      </a>
      <div className="buttons-container">
        <button>
          <a href="mailto:j.keating@live.ca">Email</a>
        </button>
        <button>
          <a href="linkedin.com" target="_blank">
            LinkedIn
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
