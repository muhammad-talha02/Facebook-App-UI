import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useState } from "react";
import { Users } from "../../dummyData";
const Post = ({ post }) => {

    // console.log(post);
    const { desc, photo, date, like, comment, userId } = post;
    const postUser = Users.filter((user) => user.id == userId)[0];
    console.log(postUser)
    const [likes, setLikes] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false);


    const likeHandler = ()=>{
         setLikes(isLiked ? likes -1 : likes + 1)
         setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
            <div className="postWrapper p-3">
                <div className="postTop d-flex justify-content-between">
                    <div className="postTopLeft d-flex align-items-center">
                        <img className='postProfileImg' src={postUser.profilePicture} alt="" />
                        <span className='postUsername'>{postUser.username}</span>
                        <span className='postDate'>{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postMiddle">
                    <span className="postText py-3 d-block">
                        {post?.desc}
                    </span>
                    <img src={photo} className="postImage" />
                </div>
                <div className="postBottom d-flex justify-content-between">
                    <div className="postBottomLeft d-flex align-items-center py-2">
                        <img className="reactionIcons" onClick={likeHandler} src="./images/like.png" alt="" />
                        <img className="reactionIcons" onClick={likeHandler} src="./images/heart.png" alt="" />
                        <div className="postLikeCounter">{likes} People like it</div>
                    </div>
                    <div className="postBottomRight d-flex align-items-center">
                        <span className="postCommentText">{comment} Comments</span>
                    </div>
                </div>
            </div></div>
    )
}

export default Post