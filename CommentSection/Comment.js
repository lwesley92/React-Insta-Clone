import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled from 'styled-components';

const StyledComments = styled.div `
    padding: 0 10px;
`;

const CommentContent = styled.p `
    font-size: 14px;
    text-align: left;
`;

const CommentUser = styled.span `
    font-weight: bold;
    padding-right: 5px;
`;

const DeleteButton = styled.button `
    border-radius: 50%;
    background-color: crimson;
    margin-right: 5px;
`;

const Comment = props => {
    return (
        <StyledComments>
            <CommentContent>
                <DeleteButton id = {props.comment.id} onClick = {props.deleted}>x</DeleteButton>
                <CommentUser>{props.comment.username}</CommentUser>{props.comment.text}
            </CommentContent>
        </StyledComments>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string,
    })
}

export default Comment;