import { Users } from "../../dummyData"
import OnlineFriends from "../online/OnlineFriends"
import "./rightbar.css"
const Rightbar = ({ user }) => {
  let PB = import.meta.env.VITE_PUBLIC_FOLDER_URL

  console.log(user)
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer d-flex align-items-center">
          <img src={PB + "/gift.png"} className="birthdayImg" />
          <span className="birthdayText"><strong>Tony stark</strong> and <strong> 3 other firends </strong> have a birthday today</span>
        </div>
        <img src={PB + "/ad.png"} alt="" className="rightbarAd" />
        <h4>Online Friends</h4>
        <ul className="onlineFriendsList">
          {
            Users.map((user) => {
              return <OnlineFriends key={user.id} user={user} />
            })
          }
        </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return (
      <>
        <div className="profileRightBar shadow px-3">
          <h4>User Information</h4>
          <div className="userInfo mb-5">
            <div className="userInfoItem mb-2">
              <span className="userInfoKey">City: </span>
              <span className="userInfovalue fw-bold">{user.city}</span>
            </div>
            <div className="userInfoItem mb-2">
              <span className="userInfoKey">From: </span>
              <span className="userInfovalue fw-bold">{user.country}</span>
            </div>
            <div className="userInfoItem mb-2">
              <span className="userInfoKey">Relationship: </span>
              <span className="userInfovalue fw-bold">{user.relationship == "1" ? "Single" : user.relationship === "2" ? "Married" :  "-"}</span>
            </div>
            <div className="userInfoItem mb-2">
              <span className="userInfoKey">DOB: </span>
              <span className="userInfovalue fw-bold">16 OCT 2001</span>
            </div>
          </div>
          <h4>User Following</h4>
          <div className="userFollowings d-flex flex-wrap justify-content-between">
            <div className="userFollowingBox d-flex flex-column mb-3">
              <img className="userFollowingImg" src={PB + "/person/1.jpeg"} />
              <span className="userFollowingText text-center">M Numan</span>
            </div>
            <div className="userFollowingBox d-flex flex-column mb-3">
              <img className="userFollowingImg" src={PB + "/person/2.jpeg"} />
              <span className="userFollowingText text-center">M Numan</span>
            </div>
            <div className="userFollowingBox d-flex flex-column mb-3">
              <img className="userFollowingImg" src={PB + "/person/3.jpeg"} />
              <span className="userFollowingText text-center">M Numan</span>
            </div>
            <div className="userFollowingBox d-flex flex-column mb-3">
              <img className="userFollowingImg" src={PB + "/person/4.jpeg"} />
              <span className="userFollowingText text-center">M Numan</span>
            </div>
            <div className="userFollowingBox d-flex flex-column mb-3">
              <img className="userFollowingImg" src={PB + "/person/5.jpeg"} />
              <span className="userFollowingText text-center">M Numan</span>
            </div>
            <div className="userFollowingBox d-flex flex-column mb-3">
              <img className="userFollowingImg" src={PB + "/person/6.jpeg"} />
              <span className="userFollowingText text-center">M Numan</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {
          user ? <ProfileRightBar /> : <HomeRightBar />
        }
      </div></div>
  )
}

export default Rightbar