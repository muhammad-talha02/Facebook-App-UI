import "./sidebar.css"
import { RssFeed, Chat, PlayCircle, Groups, Bookmark, HelpOutline, WorkOutline, Event, School, KeyboardArrowDown } from '@mui/icons-material';
import { Users } from "../../dummyData";
import CloseFriends from "../closeFriends/CloseFriends";
const Sidebar = () => {
    let PB = import.meta.env.VITE_PUBLIC_FOLDER_URL
    return (
        <div className="sidebar p-3">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarMoreBtn">
                    <KeyboardArrowDown className="showMoreIcon" />
                    Show More</button>
                <hr />
                <ul className="sidebarFriendList">
                    {
                        Users.map((user) => {
                            return <CloseFriends key={user.id} user={user} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar