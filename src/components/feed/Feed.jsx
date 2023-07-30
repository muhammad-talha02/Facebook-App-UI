import Share from "../share/Share"
import "./feed.css"
import Post from "../post/Post"
// import {Posts} from "../../dummyData"
import { useEffect, useState } from "react"
import axios from "axios"
const  Feed = ({username}) => {
  const [posts, setPosts] = useState([]);
  // axios.defaults.baseURL = `http://localhost:8000/api`
  useEffect(() => {
    console.log("username",username);
    const request = username ? `/api/posts/profile/${username}` : `api/posts/timeline/64c619d88f32c24be04f28e6`
    axios.get(request).then((res) => {
      setPosts(res.data)
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
    console.log()
  }, [])
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