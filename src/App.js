import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contacts from "./Pages/Contacts";
import "./index.css";

function App() {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    !isActive ? setActive(true) : setActive(false);
  };
  return (
    <div>
      <nav className="navbar py-2 flex flex-wrap justify-between pl-80 bg-slate-300">
        <Link className="navbar-brand w-2/4 text-2xl" to="/#">
          Home
        </Link>
        <div className="w-2/4">
          <i
            className="fa-solid fa-bars hover:cursor-pointer  text-xl border px-1"
            onClick={handleClick}
          ></i>
        </div>
        <div className={isActive && "hidden "}>
          <ul className="nav-list text-2xl mt-4">
            <li>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
