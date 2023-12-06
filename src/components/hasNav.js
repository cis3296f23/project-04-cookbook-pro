/**
 * Component that conditionally renders children based on the current location pathname.
 * If the pathname is '/Login' or '/SignUp', the navigation bar won't be shown.
 * @param {Object} props - React props containing children.
 * @returns {JSX.Element} - Returns a div containing children when the navigation bar is to be displayed.
 */
import React, { useState, useEffect } from "react";

const HasNav = ({ children }) => {
  const [showNavBar, setShowNavBar] = useState(false);

  /**
   * Controls the visibility of the navigation bar based on the current location pathname.
   * Updates the state to show or hide the navigation bar accordingly.
   * @param {string} location.pathname - The current location pathname.
   */
  useEffect(() => {
    location.pathname === "/Login" || location.pathname === "/SignUp"
      ? setShowNavBar(false)
      : setShowNavBar(true);
  }, [location.pathname]);

  return <div>{showNavBar && children}</div>;
};

export default HasNav;
