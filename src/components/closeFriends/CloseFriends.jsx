import React from 'react'

const CloseFriends = ({user}) => {
    let PB = import.meta.env.VITE_PUBLIC_FOLDER_URL

    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture ? PB + user.profilePicture : PB + "/person/noAvatar.png"} alt="" className="sideFriendImg" />
            <span className="sidebatFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriends