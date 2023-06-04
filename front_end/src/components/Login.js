import { Link, useNavigate } from 'react-router-dom';
import './Style.css';
import { Fragment, useRef } from 'react';

function Login() {

let usernameRef = useRef();
let passwordRef = useRef();
let navigate = useNavigate();
let onSubmitHandler = function (event) {
    event.preventDefault();
    if (!checkData()) {
        alert("Please enter a valid values");
    } else {
        login();
    }
}
let checkData = function () {
    if (usernameRef.current.value !== '' && passwordRef.current.value !== '') {
        return true;
    }
    return false;
}
let login = function () {
    navigate('/home', { replace: true });
}

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <h1> login </h1>
                    <label htmlFor="username">Username :</label>
                    <input
                        type="text"
                        id="username"
                        ref={usernameRef}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        ref={passwordRef}
                    />
                </div>
                <button type="submit">Login</button>
                
            </form>
            <br />
            <Link to={"/register"} style={{ margin: 20, color: "#243156" }}  href=''>
                I don't have an account
            </Link>
        </Fragment>
        );

}
export default Login;
