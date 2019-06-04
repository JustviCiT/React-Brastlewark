import React from 'react'

const SearchBar = (props) =>{
    return <input type="text" value={props.search} onChange={props.onChange.bind(this)} id="site-search" name="q"></input>;
}

export default SearchBar;