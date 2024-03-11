import React from 'react'
import './MessagesList.scss'
import { IoSearchOutline } from "react-icons/io5";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const MessagesList = () => {
    return (
        <div className='messagelist-container'>
            <div className="header">
                <div className="head">
                    <h4>Messages</h4>
                    <span>6</span>
                </div>
                <form>
                    <input type="text" placeholder='Search..' />
                    <span><IoSearchOutline /></span>
                </form>
            </div>
            <div className="messagelist-content">
                <h2>Latest</h2>

                <div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p>
                        <span className='new-message'>1</span> 
                    </div>
                </div>

                <div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div>

                <div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div><div className="messagelist-box">
                    <div className="text">
                        <img src="/images/userImg.jpeg" alt="" />
                        <div>
                            <h4>Luvien Evans</h4>
                            <p>Good morning lumiere</p>
                        </div>
                    </div>
                    <div className="info">
                        <p className="time">Just now</p> 
                        <span className='message-read'><IoCheckmarkDoneOutline /></span> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MessagesList