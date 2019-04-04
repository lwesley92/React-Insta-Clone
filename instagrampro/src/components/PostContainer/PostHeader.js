import React from 'react';
// import './Post.css';
import styled from 'styled-components';


const TheHeader = styled.div `
    display: flex;
    border: 2px solid silver;
    border-radius: 10px 10px 0 0;
    width: 80%;
    margin: auto;
    padding: 15px 0;
`;

const UserThumb = styled.img `
    border-radius: 50%;
    height: 30px;
    margin-left: 15px;
`;

const HeaderUsername = styled.div `
    font-weight: bold;
    margin: 0 15px;
`;


const PostHeader = props => {
    return(
        <TheHeader>
            <div>
                <UserThumb src = {props.dummy.thumbnailUrl} alt = 'user thumbnail'/>
            </div>
            <HeaderUsername>
                {props.dummy.username}
            </HeaderUsername>
        </TheHeader>
    )
}

export default PostHeader;