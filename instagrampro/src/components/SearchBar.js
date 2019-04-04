import React from 'react';
import './SearchBar.css';
import {SearchBarContainer, SearchBarInstaIcon, Slice, Logo, SearchInput} from './SearchBarStyles';


const SearchBar = props => {
    return(
        <SearchBarContainer>
            <SearchBarInstaIcon>
                <i className = "fab fa-instagram"></i>
                <Slice></Slice>
                <Logo src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt = 'logo' />
            </SearchBarInstaIcon>
            <SearchInput 
                type = 'text'
                placeholder = 'Input Search'
                onChange = {props.search}
            />
            <div className = 'search-action-icons'>
                <i className = "far fa-compass"></i>
                <i className = "far fa-heart"></i>
                <i className = "far fa-user-circle"></i>
            </div>
        </SearchBarContainer>
    )
}

export default SearchBar;