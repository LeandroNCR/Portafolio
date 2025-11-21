import { IoLanguage } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import "./SwitchLanguage.css";

function SwitchLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* <!-- From Uiverse.io by aadium -->  */}
      <div className="paste-button">
        <button className="button">
          <IoLanguage className="language-icon" />
          <MdArrowDropDown className="dropdown-arrow" />
        </button>
        <div className="dropdown-content">
          <a id="top" href="#" onClick={() => changeLanguage("en")}>
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{ width: "1.5em", height: "1.5em" }}
              title="US"
            />
            <span className="flag-text">English</span>
          </a>
          <a id="middle" href="#" onClick={() => changeLanguage("es")}>
            <ReactCountryFlag
              countryCode="ES"
              svg
              style={{ width: "1.5em", height: "1.5em" }}
              title="ES"
            />
            <span className="flag-text">Español</span>
          </a>
          <a id="bottom" href="#" onClick={() => changeLanguage("de")}>
            <ReactCountryFlag
              countryCode="DE"
              svg
              style={{ width: "1.5em", height: "1.5em" }}
              title="DE"
            />
            <span className="flag-text">Deutsch</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default SwitchLanguage;
