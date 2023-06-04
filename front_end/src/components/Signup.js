import './Style.css';
import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '' 
        };
    }

    handleChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email);
        window.location.href = '/home';
        console.log("HHH");
    }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" name="confirmPassword" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>
        );
    }
}

export default Signup;