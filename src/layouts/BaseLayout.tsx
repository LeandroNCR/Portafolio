import { FaGithub, FaLinkedin } from "react-icons/fa";

import SwitchTheme from "../components/layoutsComponents/BaseLayoutComponents/SwitchTheme";
import SwitchLanguage from "../components/layoutsComponents/BaseLayoutComponents/SwitchLanguage";
import "./BaseLayout.css";

function BaseLayout() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* #region Enlaces */}
          <div className="navbar-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="GitHub"
            >
              <FaGithub className="icon" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
          {/* #endregion Enlaces */}

          {/* #region Change Languague */}
          
          {/* #endregion Change Languague */}
          <SwitchLanguage />
          {/* #region Switch Theme */}
          <SwitchTheme />
          {/* #endregion Switch Theme */}
        </div>
      </nav>
    </>
  );
}

export default BaseLayout;
