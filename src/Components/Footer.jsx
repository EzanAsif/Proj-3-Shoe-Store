import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
          <h4>Made By Ezan Asif</h4> <br/> <a target = "_blank" href="https://github.com/EzanAsif"><GitHubIcon className = "Github"/></a>
      </div>
    </footer>
  );
};
