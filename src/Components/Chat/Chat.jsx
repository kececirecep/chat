import React from 'react'
import './Chat.scss'
import { BsBell, BsThreeDotsVertical } from "react-icons/bs";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { CiImageOn } from "react-icons/ci";

const Chat = () => {
  return (
    <div className='chat-container'>
      <div className="header">
        <div className="status">
          <span></span>
          <h4>Online</h4>
        </div>
        <div className="options">
          <span><BsBell /></span>
          <span><BsThreeDotsVertical /></span>
        </div>
      </div>

      <div className="chat-content">
        <div className="chatPerson-container">
          <div className="myMessage">
            <div className="myMessagesContainer">
              <div className="textAndImg">
                <p>I see many other friends post their vacation photos on instagram, how about you guys</p>
              </div>
              <div className="time">
                <h6>10 min agon</h6>
                <span><IoCheckmarkDoneOutline /></span>
              </div>
            </div>
          </div>
          <div className="otherPersonMessage">
            <div className="otherMessage-container">
              <img src="/images/userImg.jpeg" alt="" />
              <div className="otherDirectMessage">
                <div className="textAndImg">
                  <p>I see many other friends post their vacation photos on instagram, how about you guys</p>
                </div>
                <div className="time">
                  <h6>09:57 AM</h6>
                  <span><IoCheckmarkDoneOutline /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form id="myForm">
          <input type="text" placeholder="Typing..." />
          <label for="imageUpload">
            <span id="uploadIcon"><CiImageOn /></span>
          </label>
          <input type="file" id="imageUpload" style={{ display: "none" }} />
          <span id="sendIcon"><RiSendPlaneFill /></span>
        </form>

      </div>

    </div>
  )
}

export default Chat