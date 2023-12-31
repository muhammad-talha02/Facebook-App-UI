import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Topbar = () => {
    let PB = import.meta.env.VITE_PUBLIC_FOLDER_URL
    const {user}= useContext(AuthContext);
    console.log(user)
    return (
        <>
            <header className="container-fluid bg-theme py-1 sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="text-white container d-flex">
                        <div className="col-6 col-md-3">
                            <Link className="navbar-brand" to="/">ShareVibe</Link>
                        </div>

                        <form className="col-5 d-none d-md-flex" role="search">
                            <input className="form-control me-2 rounded-5" type="search" placeholder="Search" aria-label="Search" />
                            <SearchIcon className="search-icon" />
                        </form>
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="col-3 collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Timeline</a>
                                </li>
                            </ul>
                            <div className="notify-box d-flex">
                                <button className="notify-item position-relative mx-3 border-0 bg-transparent text-white">
                                    <PersonIcon className=""></PersonIcon>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        9
                                    </span>
                                </button>
                                <button className="notify-item position-relative mx-3 border-0 bg-transparent text-white">
                                    <MessageIcon />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        9
                                    </span>
                                </button>
                                <button className="notify-item position-relative mx-3 border-0 bg-transparent text-white">
                                    <NotificationsIcon />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        9
                                    </span>
                                </button>
                            </div>

                        </div>
                        <div className="col-1 nav-profile-box ms-auto cursor-pointer">
                           <Link to={`/profile/${user.username}`}>

                           <img src={PB + user.profilePicture || "/images/person/noAvatar.png"} alt="" />
                           </Link> 
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Topbar