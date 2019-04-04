import React from 'react';
import styled from 'styled-components';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';

const AppWrapper = styled.div `
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

const LogoutButton = styled.button `
  border: 2px solid silver;
  border-radius: 10px;
  padding: 5px;
  background-color: white;
  margin-top: 5px;
  position: absolute;
  right: 700px;
  top: 18px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  
  render() {
    return (
      <AppWrapper>
        <LogoutButton className = 'logoutBtn' onClick = {this.props.logout}>Logout</LogoutButton>
        <PostsPage />
      </AppWrapper>
    );
  }
}

export default Authenticate(App);