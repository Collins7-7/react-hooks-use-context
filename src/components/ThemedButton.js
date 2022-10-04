import React, {useContext} from "react";
import {themeContext} from "../context/them"

function ThemedButton({ ...props }) {
  const {theme} = useContext(themeContext)

  return <button className={theme} {...props} />;
}

export default ThemedButton;
