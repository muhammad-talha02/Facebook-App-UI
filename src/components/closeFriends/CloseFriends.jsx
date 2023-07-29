import React from 'react'

const CloseFriends = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sideFriendImg" />
            <span className="sidebatFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriends