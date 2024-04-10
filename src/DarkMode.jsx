import { useState } from "react";
import Sun from "./assets/sun.svg";
import Moon from "./assets/moon.svg";

export default function DarkMode() {
  const [dark, setDark] = useState(document.body.className.includes("dark"));
  function onClick() {
    if (dark) {
      document.body.classList.remove("dark");
      setDark(false);
    } else {
      document.body.className = "dark";
      setDark(true);
    }
  }
  return (
    <button onClick={onClick} className="dark-mode-button">
      {dark ? <img src={Sun} /> : <img src={Moon} />}
    </button>
  );
}
