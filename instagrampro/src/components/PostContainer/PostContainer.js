import React from 'react';
import Post from './Post';
// import './Post.css';

const PostContainer = props => {
    return(
        <div className = 'postContainer'>
            {props.dummy.map(post => (
                <Post 
                    likes = {post.likes}
                    post = {post}
                    key = {post.imageUrl}
                />
            ))}
        </div>
    )
}

export default PostContainer;