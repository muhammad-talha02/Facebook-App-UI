import Share from "../share/Share"
import "./feed.css"
import Post from "../post/Post"
// import {Posts} from "../../dummyData"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
const  Feed = ({username}) => {
  const {user } = useContext(AuthContext)
  const [posts, setPosts] = useState([]);
  // axios.defaults.baseURL = `http://localhost:8000/api`
  useEffect(() => {
    console.log("username",username);
    const request = username ? `/api/posts/profile/${username}` : `api/posts/timeline/${user._id}`
    axios.get(request).then((res) => {
      setPosts(res.data)
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
    console.log()
  }, [username,user._id])
  return (
    <div className="feed">
      <div className="feedWrapper mx-auto col-lg-10 col-12">
        <Share />
        {
          posts.map((post) => {
            return <Post key={post._id} post={post} />

          })
        }
      </div>
    </div>
  )
}

export default Feed