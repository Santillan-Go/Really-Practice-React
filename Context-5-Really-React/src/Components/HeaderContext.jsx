import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import LanguageContext from "../Context/LanguageContext";
import LogContext from "../Context/LogContext";

export const HeaderContext = () => {
const {theme, handleTheme} = useContext(ThemeContext)


const {text, handleLanguage}=useContext(LanguageContext)
const {log, handleAuth}=useContext(LogContext)
  return (
    <header  className={theme}>
      <h2>MY PAGE</h2>
      <h2>MY HEADER</h2>

      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme"  onClick={handleTheme}  value={"light"} id="light" />
      <label htmlFor="light">LIGHT</label>

      <input type="radio" name="theme" onClick={handleTheme}  value={"dark"} id="dark" />
      <label htmlFor="dark">DARK</label>

      <button onClick={handleAuth}>{log? text.btnLogout:text.btnlogin }</button>
    </header>
  );
};
