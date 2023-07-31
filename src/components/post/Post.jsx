import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { useState, useEffect, useContext } from "react";
import {AuthContext} from "../../context/AuthContext"
import axios from 'axios'
import { format } from "timeago.js"
import { Link } from "react-router-dom"
const Post = ({ post }) => {
    const [user, setUser] = useState({})
    const { desc, img, date, comment, userId } = post;
    // const postUser = Users.filter((user) => user.id == userId)[0];
    // console.log(img)
    const [likes, setLikes] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);

const {user:currentUser} = useContext(AuthContext)

useEffect(()=>{
setIsLiked(post.likes.includes(currentUser._id))
}, [currentUser._id, post.likes])

    useEffect(() => {
        axios.get(`/api/users?userId=${userId}`).then((res) => {
            setUser(res.data);
            // console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
        console.log()
    }, [userId])


    const likeHandler = (postId) => {
        console.log(postId)
        axios.put(`/api/posts/${post._id}/like`, {userId:currentUser._id}).then((res) => {
            console.log(res)
        }).catch(err => console.log(err))
        setLikes(isLiked ? likes - 1 : likes + 1)
        setIsLiked(!isLiked)
    }


    return (
        <div className='post'>
            <div className="postWrapper p-3">
                <div className="postTop d-flex justify-content-between">
                    <div className="postTopLeft d-flex align-items-center">
                    <Link to={`profile/${user.username}`}>
                        <img className='postProfileImg' src={user.profilePicture || "/images/person/noAvatar.png"} alt="" />
                    </Link>
                        <span className='postUsername'>{user.username}</span>
                        <span className='postDate'>{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postMiddle">
                    <span className="postText py-3 d-block">
                        {post?.desc}
                    </span>
                    <img src={img} className="postImage" />
                </div>
                <div className="postBottom d-flex justify-content-between">
                    <div className="postBottomLeft d-flex align-items-center py-2">
                        <img className="reactionIcons" onClick={likeHandler} src="/images/like.png" alt="" />
                        <img className="reactionIcons" onClick={ likeHandler} src="/images/heart.png" alt="" />
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