import React from "react";

const SearchBar = (props) => {

    return (
        <div>
            <input 
            value = {props.value}
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search for Employee..."
            />
            <i className={`${props.icon} icon`}></i>
        </div>
    )
}

export default SearchBar;