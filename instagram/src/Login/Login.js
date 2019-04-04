import React from 'react';
// import './Login.css';
import styled from 'styled-components';


const LoginContainer = styled.div `
    background-image: linear-gradient(pink, lightblue, pink);
    max-width: 400px;
    max-height: 400px;
    padding: 100px;
    margin: auto;
    border: 3px solid silver;
    border-radius: 12.5%;
    margin-top: 100px;
`;

const Title = styled.h1 `
    text-align: center;
`;

const LoginForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginInput = styled.input `
    border-radius: 10px;
    padding: 10px 10px;
    margin-bottom: 5px;
`;

const LoginButton = styled.button `
    border-radius: 10px;
    padding: 10px;
    font-weight: bold;
`;


class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    };

    handleLogin = event => {
        const username = this.state.username;

        localStorage.setItem('username', username);
        window.location.reload();
    };
    
    render(){
        return(
            <LoginContainer>
                <Title>Welcome to Patrick's FakeGram</Title>
                <LoginForm>
                    <LoginInput 
                        type = 'text'
                        placeholder = 'Username'
                        value = {this.state.username}
                        onChange = {this.handleInputChange}
                        name = 'username'
                    /> 
                    <LoginInput 
                        type = 'password'
                        placeholder = 'Password'
                        value = {this.state.password}
                        onChange = {this.handleInputChange}
                        name = 'password'
                    />
                    <LoginButton onClick = {this.handleLogin}>Login</LoginButton>
                </LoginForm>
            </LoginContainer>
            
        )
    }
}
export default Login;