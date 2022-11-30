import React from 'react';
import '../Pages/Style.css';
function Register() {
    return (
        <div className="container d-flex h-100">
            <div className="row align-self-center w-100 main-login ">
                <div className="col-6 mx-auto p-4 shadow">
                    <h4 className="text-title text-center m-2">Register</h4>
                    <form className="form-group">
                        <input type="text" className="form-control mt-2" placeholder="username"/>
                        <input type="email" className="form-control mt-2" placeholder="email"/>
                        <input type="password" className="form-control mt-2" placeholder="password"/>
                        <button className="btn btn-cu w-100 mt-2">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
