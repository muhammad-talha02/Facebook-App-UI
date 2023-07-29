import React from 'react'

const OnlineFriends = ({user}) => {
  return (
    <li className="onlineFriendItem">
    <div className="onlineFriendItemContainer">
      <img src={user.profilePicture} alt="" className="onlineFriendImg" />
      <span className="onlinebadge"></span>
    </div>
    <span className="fw-bold rightbarUsername">{user.username}</span>
  </li>
  )
}

export default OnlineFriends