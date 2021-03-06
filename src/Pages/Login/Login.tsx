import React from 'react';
import './Login.css';
import '../../assets/assets/css/style.css';


const Login = () => {
    return (
            <div className="sufee-login d-flex align-content-center flex-wrap">
                <div className="container">
                    <div className="login-content">
                        <div className="login-logo">
                            <a href="index.html">
                                <img className="align-content" src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="login-form">
                            <form>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                        <div className="checkbox">
                                            <label>
                                        <input type="checkbox" /> Remember Me
                                    </label>
                                        

                                        </div>
                                        <button type="button" onClick={(event) =>  {window.location.href='/Home'}} className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                                        
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login
