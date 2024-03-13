import React from 'react'
import './Friends.scss'
import { IoSearchOutline } from "react-icons/io5";

const Friends = () => {
    return (
        <div className='friends-container'>
            <div className="header">
                <div className="head">
                    <h4>Friends</h4>
                    <span>12</span>
                </div>
                <form>
                    <input type="text" placeholder='Search..' />
                    <span><IoSearchOutline /></span>
                </form>
            </div>
            <div className="friendslist-content">

                <div className="friendslist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                        </div>
                    </div>
                    <p className="online"></p>
                </div>


            </div>
        </div>
    )
}

export default Friends