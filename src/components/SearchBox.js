import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div> 
            <input
                className="pa3 mb3 ba bg-lightest-blue br2" 
                type='search' 
                placeholder="Search Robots" 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;