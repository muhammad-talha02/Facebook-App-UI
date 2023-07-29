import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
const Profile = () => {
    return (
        <>
            <Topbar />
            {/* <div className="container-fluid d-flex p-0" id='homeContainer'> */}
            <div className="profile d-flex container-fluid">
                <Sidebar />
                <div className="profileRight px-2">
                    <div className="profileRightTop">
                    <div className="profileCover">

                        <img className='profileCoverImg' src="./images/post/3.jpeg" alt="" />
                        <img className='profileUserImg' src="./images/person/3.jpeg" alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName text-center fw-bold'>Malik Talha</h4>
                        <p className='profileInfoDesc text-center'>Hey Hi i am MERN Stack Developer!</p>
                    </div>
                    </div>
                    <div className="profileRightBottom d-flex">
                        <Feed />
                        <Rightbar profile/>

                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Profile