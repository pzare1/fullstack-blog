import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/Style.css';

function Login() {
    return (
        <div className="container d-flex h-100">
            <div className="row align-self-center w-100 main-login ">
                <div className="col-6 mx-auto p-4 shadow">
                    <h4 className="text-title text-center m-2">Login</h4>
                    <form className="form-group">
                        <input type="text" className="form-control mt-2" placeholder="username"/>
                        <input type="password" className="form-control mt-2" placeholder="password"/>
                        <button className="btn btn-cu w-100 mt-2">Login</button>
                        <div className="mt-3"><span className="text-secondary">Do not have an account?</span><Link className="link-regi" to="/register">Register</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
