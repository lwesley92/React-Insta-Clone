import React from 'react';
import Login from '../components/Login/Login';

const Authenticate = App => 
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false,
            };
        }

        componentDidMount() {
            if(!localStorage.getItem('username')) {
                this.setState({ loggedIn: false });
            }

            else {
                this.setState({ loggedIn: true });
            }
        } 

        handleLogout = event => {
            this.setState({
                loggedIn: false,
            })

            localStorage.clear();
        }

        render() {
            if(this.state.loggedIn === true) return <App logout = {this.handleLogout}/>;
            // return <App />
            return <Login />;
        }

    };

   
export default Authenticate;