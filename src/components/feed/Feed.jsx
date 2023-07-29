import Share from "../share/Share"
import "./feed.css"
import Post from "../post/Post"
import {Posts} from "../../dummyData"
const Feed = () => {
  return (
    <div className="feed">
    <div className="feedWrapper mx-auto col-lg-10 col-12">
      <Share/>
      {
        Posts.map((post)=>{
          return <Post key={post.id} post={post}/>

        })
      }
    </div>
    </div>
  )
}

export default Feed