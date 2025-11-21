import React, { useState, useEffect } from "react";
import "./SwitchTheme.css";

const darkModeLocalStorageKey = "isDarkMode";

function applyTheme(isDark: boolean) {
  const body = document.body;
  if (isDark) {
    body.classList.add("dark-mode");
    localStorage.setItem(darkModeLocalStorageKey, "true");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem(darkModeLocalStorageKey, "false");
  }
}

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(darkModeLocalStorageKey);
  if (savedTheme !== null) {
    return savedTheme === "true";
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark;
};

function SwitchTheme() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(isDarkMode);
    localStorage.setItem(
      darkModeLocalStorageKey,
      isDarkMode ? "true" : "false"
    );
  }, [isDarkMode, applyTheme]);

  const hangleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    // <!-- From Uiverse.io by anandita-3217 -->
    <label className="switch">
      <input
        id="switch-theme"
        type="checkbox"
        onChange={hangleThemeChange}
        checked={isDarkMode}
      />
      <span className="slider"></span>
      <span className="clouds_stars"></span>
    </label>
  );
}

export default SwitchTheme;
