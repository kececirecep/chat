import React from 'react'
import './Profile.scss'

import { GrSend } from "react-icons/gr";


const Profile = () => {
    const myStyleIcon ={
        fontSize: "18px",
        color:"#E4C219"
    }
    return (
        <div className='profile-container'>
            <div className="header">
                <img src="/images/userImg.jpeg" alt="" />
                <div className="text">
                    <h4>Ryan Azhari</h4>
                    <div className="status">
                        <span className='online'></span>
                        <h5>Online</h5>
                    </div>
                </div>
            </div>
            <div className="profile-content">
                <div className="img">
                    <img src="/images/userImg.jpeg" alt="" />
                    <span className="online"></span>
                </div>
                <h4>Lumiere Moretti</h4>
                <p>+62 987 657 872</p>
                <span><GrSend style={myStyleIcon} /></span>
            </div>
        </div>
    )
}

export default Profile