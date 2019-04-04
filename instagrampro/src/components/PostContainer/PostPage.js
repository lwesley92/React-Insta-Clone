import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';


class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filter: [],
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData})
  }

  handleSearch = event => {
    // console.log('hello');
    let filteredPosts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });

    this.setState({ filter: filteredPosts })
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          search = {this.handleSearch} 
        />
        <PostContainer 
          dummy = {this.state.filter.length === 0 ?  this.state.posts : this.state.filter } 
        />
      </div>
    );
  }
}

export default PostsPage;