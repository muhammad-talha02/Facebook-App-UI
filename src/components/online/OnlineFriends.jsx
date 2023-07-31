import React from 'react'

const OnlineFriends = ({user}) => {
  let PB = import.meta.env.VITE_PUBLIC_FOLDER_URL

  return (
    <li className="onlineFriendItem">
    <div className="onlineFriendItemContainer">
      <img src={user.profilePicture ? PB + user.profilePicture : PB + "/person/noAvatar.png"} alt="" className="onlineFriendImg" />
      <span className="onlinebadge"></span>
    </div>
    <span className="fw-bold rightbarUsername">{user.username}</span>
  </li>
  )
}

export default OnlineFriends