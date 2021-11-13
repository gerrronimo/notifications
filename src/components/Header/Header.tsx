import React from "react";
import "./Header.css";
import NotificationCenter from "../NotificationCenter/NotificationCenter";

function Header() {
  return (
    <header>
      <h2 className="logo">Logotype</h2>

      <nav>
        <a href="https://github.com/gerrronimo/notifications" target="_blank" rel="noreferrer">GitHub Repository</a>
        <a href="https://msng.link/o/?nklchumakov=tg" target="_blank" rel="noreferrer">Telegram</a>
      </nav>

      <NotificationCenter/>
    </header>
  )
}

export default Header;
