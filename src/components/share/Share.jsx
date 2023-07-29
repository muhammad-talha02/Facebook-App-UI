import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"
const Share = () => {
  return (
    <div className="share">
    <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src="./images/person/3.jpeg" alt="" />
            <input type="text"
                placeholder="What's in your mind?"
                className="shareInput"
            />
        </div>
            <hr />
            <div className="shareBottom">
                <div className="shareOptions px-2 d-flex w-100 justify-content-around">
                    <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareOptionIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                    <Label  htmlColor="blue" className="shareOptionIcon"/>
                        <span className="shareOptionText">Tags</span>
                    </div>
                    <div className="shareOption">
                    <Room htmlColor="green" className="shareOptionIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareOptionIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="btn btn-primary">Share</button>

                </div>
            </div>
    </div>
  )
}

export default Share