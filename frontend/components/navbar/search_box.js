import React from 'react';

const SearchBox = (props) => {
    return (
        <input type="search" 
        className="search" 
        placeHolder={props.placeHolder}
        onChange = {props.handleChange}
         />
    )
}

export default SearchBox;