import React from 'react';
import styled from 'styled-components';

const Input = styled.input `
    width: 95%;
    border: 1px solid silver;
    border-radius: 0 0 10px 10px;
    padding: 20px 15px;
`;


const CommentInput = props => {
    return (
        <div>
            <form onSubmit = {props.commentSubmit}>
                <Input
                    type = 'text'
                    value = {props.comment}
                    placeholder = "Add a comment..."
                    onChange = {props.commentChange}
                    id = {props.id}
                />
            </form>
        </div>
    )
}

export default CommentInput;