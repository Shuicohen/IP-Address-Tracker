import React, { useState } from "react";
import { fetchIPDetails } from "../utils/api";
import arrowIcon from "../assets/icon-arrow.svg";
import "../styles/SearchBar.css";

const SearchBar = ({ setIpData }) => {
    const [input, setInput] = useState("");

    const handleSearch = async () => {
        try {
          const data = await fetchIPDetails(input); // Pass the user's input
          setIpData(data); // Set the returned data to state
        } catch (error) {
          console.error("Error fetching data from API:", error);
        }
      };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for any IP address or domain"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>
                <img src={arrowIcon} alt="Search" />
            </button>
        </div>
    );
};

export default SearchBar;