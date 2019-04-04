import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
// import './Post.css';
import styled from 'styled-components';


const PostContent = styled.div `
    width: 80%;
    margin: auto;
    margin-bottom: 35px;
    border: 2px solid silver;
    border-radius: 0 0 10px 10px;
`;

const ImageUrl = styled.img `
    width: 100%;
`;

const ActionIcons = styled.div `
    display: flex;
    padding: 10px 0;
`;

const LikesSpan = styled.span `
    display: flex;
    padding: 0 10px;
    text-align: left;
    font-weight: bold;
`;


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           likes: 0,
           active: false,
        }
    }
   componentDidMount() {
       this.setState({
           likes: this.props.likes
       })

   } 

    addALike = () => {
        let likes = this.state.likes;
        const activeState = this.state.active;
        this.setState({
            likes: likes + 1,
            active: !activeState
        })
    }

    render() {
        return(
            <div>
                <PostHeader dummy = {this.props.post}/>
                <PostContent>
                    <div className = 'postImg'>
                        <ImageUrl src = {this.props.post.imageUrl} alt = 'post content'/>
                    </div>
                    <div >
                        <ActionIcons>
                            <i className ={this.state.active ? "fas fa-heart" : "far fa-heart"} onClick = { this.addALike }></i>
                            <i className = "far fa-comment"></i>
                        </ActionIcons>
                        <LikesSpan>{this.state.likes} likes</LikesSpan>
                    </div>
                    <CommentSection comments = {this.props.post.comments} />
                </PostContent>
            </div>
        )
    }
    
}

Post.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Post;