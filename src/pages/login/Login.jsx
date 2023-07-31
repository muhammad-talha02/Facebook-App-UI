import React, {useRef, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import "./login.css"
import { loginCall } from '../../utils/apiCalls'
import {CircularProgress} from "@mui/material"
import { Link } from 'react-router-dom'
const Login = () => {

    const email = useRef()
    const password = useRef()

const {dispatch, user, isFetching} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value}, dispatch)

    };
    return (
        <div className="container-fluid login vh-100 d-flex align-items-center">

            <div className='container-lg'>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <h1 className='text-theme fw-bold display-4'>SharVibes</h1>
                        <p className='fw-bold h5 pe-3'>Make and Share Vibes around the world with ShareVibes.</p>
                    </div>
                    <div className="col-4 bg-white rounded p-4">
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email"
                                    name='email'
                                    required
                                    minLength="6"
                                    className="form-control" id="email" ref={email}
                                     />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" 
                                required id="password" ref={password}/>
                            </div>
                            <button type="submit" className="btn btn-theme w-100 "  disabled={isFetching}>{isFetching ?  <CircularProgress color='inherit' size="25px"/> : "login"}</button>
                            <p className='text-center text-theme my-4'>Forgot password?</p>
                            <Link to="/register" disabled={isFetching} className="btn btn-success w-100">Create an account</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login