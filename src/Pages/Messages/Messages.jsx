import React from 'react'
import Aside from '../../Components/Aside/Aside'
import MessagesList from '../../Components/MessagesList/MessagesList'
import './MessagesPage.scss'
import Chat from '../../Components/Chat/Chat'
import Profile from '../../Components/Profile/Profile'

const Messages = () => {
  return (
    <div className='MessagePage-container'>
      <Aside/> 
      <MessagesList/>
      <Chat/>
      <Profile/>
    </div>
  )
}

export default Messages