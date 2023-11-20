import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export default () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div
        className="container-fluid justify-content-start"
        style={{ overflowWrap: "anywhere" }}
      >
        <a className="navbar-brand" href="/">
          CookBook Pro
        </a>
        <div className="navbar-nav mr-auto">
          <a className="nav-link" href="/meal-plans">
            Meal Plans
          </a>
          <a className="nav-link" href="/search">
            Search
          </a>
          <a className="nav-link" href="/recipes">
            Recipes
          </a>
          <a className="nav-link" href="/shopping-list">
            Shopping List
          </a>
          <a id={"buffer"} style={{width:"950px"}}></a>
          <a className="nav-link" href="/Login">
            <input
              className="getLogin"
              type="button"
              id="isValid"
              value={"Log In"}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
