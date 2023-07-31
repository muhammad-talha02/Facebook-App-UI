import { useContext, useRef, useState } from "react"
import "./share.css"
import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"
const Share = () => {

    const { user } = useContext(AuthContext);
    const postDesc = useRef();
    const { postPic, setPostPic } = useState(null);

    const handlePost =async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: postDesc.current.value
        }
        try {
          await  axios.post("api/posts", newPost)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture || "/images/person/noAvatar.png"} alt="" />
                    <input type="text"
                        placeholder={`What's in your mind ${user.username}?`}
                        className="shareInput"
                        ref={postDesc}
                    />
                </div>
                <hr />
                <form onSubmit={handlePost} className="shareBottom">
                    <div className="shareOptions px-2 d-flex w-100 justify-content-around">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareOptionIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input className="d-none" type="file" id="file" accept=".jpg, .png, .jpeg" onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareOptionIcon" />
                            <span className="shareOptionText">Tags</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareOptionIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareOptionIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">Share</button>

                </form>
            </div>
        </div>
    )
}

export default Share