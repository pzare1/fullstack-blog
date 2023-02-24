import React, { useState } from 'react';
import '../Pages/Style.css';
function Register() {
    const [inputs, setinputs] = useState({
        username:"",
        email:"",
        password:""
    })
    const handleChange = (e) => {
        setinputs(prev => ({...prev, [e.target.name]: e.target.value}));
    }
    console.log(inputs)
    return (
        <div className="container d-flex h-100">
            <div className="row align-self-center w-100 main-login ">
                <div className="col-6 mx-auto p-4 shadow">
                    <h4 className="text-title text-center m-2">Register</h4>
                    <form className="form-group">
                        <input type="text" className="form-control mt-2" placeholder="username" name='username' onChange={handleChange}/>
                        <input type="email" className="form-control mt-2" placeholder="email" name='email'  onChange={handleChange}/>
                        <input type="password" className="form-control mt-2" placeholder="password" name='password' onChange={handleChange}/>
                        <button className="btn btn-cu w-100 mt-2">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
