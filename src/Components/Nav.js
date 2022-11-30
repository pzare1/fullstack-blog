import React from 'react'
import { Link } from 'react-router-dom'
import Logo from  '../Assets/logo.png'
function Nav() {
    return (
        <>
            <div className="container">
                    <div className="row">
                    <div className="d-flex justify-content-between">
                        <div className="logo m-4">
                            <Link to="/" className="p-3 logoholder">
                            <img src={Logo} className="logo" style={{maxWidth:40, maxHeight:40}}  />
                            </Link>
                        </div>
                        <div className="join m-4 d-flex">
                            <Link to="/?cat=food" className="p-3 text-nav">
                                <p className="text-secondary">Food</p>
                            </Link>
                            <Link to="/?cat=sport" className="p-3 text-nav">
                                <p className="text-secondary">Sport</p>
                            </Link>
                            <Link to="/?cat=work" className="p-3 text-nav">
                                <p className="text-secondary">Work</p>
                            </Link>
                            <Link to="/?cat=work" className="p-3 text-nav">
                                <p className="text-secondary">John</p>
                            </Link>
                            <Link to="/?cat=work" className="p-3 text-nav">
                                <p className="text-secondary">Logout</p>
                            </Link>
                            <Link to="/write" className="p-3">
                            <button className="btn btn-custom write px-3">Write</button>
                            </Link>
                            <Link to="/login" className="p-3">
                                <button className="btn btn-custom px-3" style={{backgroundColor:'#00b200',color:'white'}}>Join now</button>
                            </Link>
                        </div>
                    </div>
                    </div>   
            </div>
        </>
    )
}

export default Nav
