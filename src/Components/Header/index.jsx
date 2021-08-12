import React from "react";
import "./main.scss";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header h-16">
      <ul className="header__list flex items-center justify-center h-full">
        <li className="header__list-item px-5 text-xl">
          <Link
            className="text-white hover:text-yellow-200 transition transition-all"
            to="/todolist"
          >
            Todo List
          </Link>
        </li>
        <li className="header__list-item px-5 text-xl">
          <Link
            className="text-white hover:text-yellow-200 transition transition-all"
            to="/randomquotemachine"
          >
            Random Quote
          </Link>
        </li>
        <li className="header__list-item px-5 text-xl">
          <Link
            className="text-white hover:text-yellow-200 transition transition-all"
            to="/calculator"
          >
            Calculator
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
