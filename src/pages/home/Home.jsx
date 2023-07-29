import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
const Home = () => {
    return (
        <>
            <Topbar />
            <div className="container-fluid d-flex p-0" id='homeContainer'>
                <Sidebar />
                <Feed/>
                <Rightbar />
            </div>
        </>
    )
}

export default Home