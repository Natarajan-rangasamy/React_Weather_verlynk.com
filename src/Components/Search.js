import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Assets/search.css";


const onSearch = () =>{
  let value = document.querySelector('.City-input').value;
    value.trim();
    let cities = localStorage.setItem('city',value);
}



const Search = () => {
  return (
    <div>
      <div className="Container">
        <input
          className="City-input"
          type="Search"
          placeholder="Enter The city to search"
        ></input>
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} onClick={Search} />
      </div>
    </div>
  );
};

export default Search;
