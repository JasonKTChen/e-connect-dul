// Chun-Wei Tseng
//One potential improvement to consider would be to add some form of user authentication or authorization to the app,
//so that users can securely log in and only edit or manage their own business cards and collections. 
//This could be implemented using a library like Passport.js, which provides various authentication strategies for Express.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedInSuccess, setIsLoggedInSuccess] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("Start login process");
        console.log(username, password);
        let user = {};
        user.username = username;
        user.password = password;

        fetch("/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        }).then((res)=>res.json())
            .then((res) => {
                if (res.isLoggedIn === true){
                    setIsLoggedInSuccess(true);
                    setTimeout(() => {
                        setIsLoggedInSuccess(false);
                        navigate("/");
                    }, 2000);
                }else{
                    setLoginFailed(true);
                    setTimeout(() => {
                        setLoginFailed(false);
                    }, 2000);
                }
                
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="row">
                <div className="col-6 mx-auto">
                    <h1 className="text-center my-5">Wellcome to E-Connect</h1>
                    <form id="login-form" onSubmit={handleSubmit}>
                        <h2 id="login-form-title">Login</h2>
                        <div className="form-group">
                            <label
                                className="login-input-label"
                                for="loginName"
                            >
                                Username:
                            </label>
                            <input
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                className="form-control login-input"
                                id="loginName"
                                name="loginName"
                                placeholder="Enter Name"
                                required
                            ></input>
                        </div>
                        <div className="form-group">
                            <label
                                className="login-input-label"
                                for="loginPassword"
                            >
                                Password:
                            </label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="form-control login-input"
                                id="loginPassword"
                                name="loginPassword"
                                placeholder="Enter Password"
                                required
                            ></input>
                        </div>
                        {isLoggedInSuccess ? (
                            <div class="alert alert-success" role="alert">
                                Login Successfully!
                            </div>
                        ) : (
                            ""
                        )}
                        {loginFailed ? (<div class="alert alert-danger" role="alert">
                                Incorrect username or password.Please try again.
                                </div>):("")}
                        <button
                            id="login-button"
                            className="btn btn-primary mr-auto"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
