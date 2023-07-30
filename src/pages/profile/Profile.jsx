import React, {useState, useEffect} from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Profile = () => {
const [user, setUser] = useState({})
const params = useParams();
const username= params.username
console.log(params)
    useEffect(() => {
        axios.get(`/api/users?username=${username}`).then((res) => {
            setUser(res.data)
            console.log("data",res.data)
        }).catch((error) => {
            console.log(error)
        })
        console.log()
    }, [])
    return (
        <>
            <Topbar />
            {/* <div className="container-fluid d-flex p-0" id='homeContainer'> */}
            <div className="profile d-flex container-fluid">
                <Sidebar />
                <div className="profileRight px-2">
                    <div className="profileRightTop">
                    <div className="profileCover">

                        <img className='profileCoverImg' src={user.coverPicture || "/images/person/noCover.png"} alt="" />
                        <img className='profileUserImg' src={user.profilePicture || "/images/person/noAvatar.png"} alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className='profileInfoName text-center fw-bold'>{user.username}</h4>
                        <p className='profileInfoDesc text-center'>{user.desc}</p>
                    </div>
                    </div>
                    <div className="profileRightBottom d-flex">
                        <Feed username={username}/>
                        <Rightbar user={user}/>

                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Profile