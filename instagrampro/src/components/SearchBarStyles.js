import styled from 'styled-components';

export const SearchBarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 25px;
    padding: 26px 20px;
    border-bottom: 2px solid silver;
    margin-bottom: 15px;
`;

export const SearchBarInstaIcon = styled.div `
    display: flex;
    align-items: center;
`;

export const Slice = styled.div `
    width: 2px;
    height: 28px;
    background-color: black;
    margin: 0 16px;
`;

export const Logo = styled.img `
    height: 35px;
    width: 115px;
`;

export const SearchInput = styled.input `
    border: 2px solid silver;
    border-radius: 10px;
    padding: 5px;
`;