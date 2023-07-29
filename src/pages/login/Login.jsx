import React from 'react'
import "./login.css"
const Login = () => {
    return (
        <div className="container-fluid login vh-100 d-flex align-items-center">

            <div className='container-lg'>
                <div className="row d-flex justify-content-center">
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <h1 className='text-theme fw-bold display-4'>SharVibes</h1>
                        <p className='fw-bold h5 pe-3'>Make and Share Vibes around the world with ShareVibes.</p>
                    </div>
                    <div className="col-4 bg-white rounded p-4">
                        <div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-theme w-100">Submit</button>
                            <p className='text-center text-theme my-4'>Forgot password?</p>
                            <button type="submit" className="btn btn-success w-100">Create an account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login