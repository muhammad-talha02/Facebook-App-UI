import React, { useRef } from 'react'
import "./register.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

const Navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password.current.value == confirmPassword.current.value) {
            const userObj = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {

                const res = await axios.post("/api/auth/register", userObj);
                console.log(res);
                Navigate("/login")

            }
            catch (err) {
                console.log("Error in registration")
            }
        }
        else {
            alert("Password must be same")
        }
        // console.log({email:email.current.value,password:password.current.value})
        // loginCall({email:email.current.value,password:password.current.value}, dispatch)

    };
    return (
        <div className="container-fluid register vh-100 d-flex align-items-center">

            <div className='container-lg'>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <h1 className='text-theme fw-bold display-4'>SharVibes</h1>
                        <p className='fw-bold h5 pe-3'>Make and Share Vibes around the world with ShareVibes.</p>
                    </div>
                    <div className="col-4 bg-white rounded p-4">
                        <form onSubmit={handleRegister}>
                            <div className="mb-3">
                                <input type="text" className="form-control p-2" id="username" ref={username} placeholder='Username' required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control p-2" id="email" ref={email} placeholder='Email' required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control p-2" id="password" ref={password} placeholder='Password' required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control p-2" id="confirmPassword" ref={confirmPassword} placeholder='Confirm Password' required />
                            </div>
                            <button type="submit" className="btn btn-theme w-100">Signup</button>
                            <p className='text-center text-theme my-4'>Already have Account?</p>
                            <Link to="/login" className="btn btn-success w-100">Login to Account</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register