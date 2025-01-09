import React from "react";
import SearchBar from "./SearchBar";
import "../styles/Header.css";

const Header = ({ setIpData }) => (
  <header className="header">
    <h1>IP Address Tracker</h1>
    {/* Include the SearchBar */}
    <SearchBar setIpData={setIpData} />
  </header>
);

export default Header;
