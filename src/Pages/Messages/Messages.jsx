import React from 'react'
import Aside from '../../Components/Aside/Aside'
import MessagesList from '../../Components/MessagesList/MessagesList'
import './MessagesPage.scss'
import Chat from '../../Components/Chat/Chat'

const Messages = () => {
  return (
    <div className='MessagePage-container'>
      <Aside/>
      <MessagesList/>
      <Chat/>
    </div>
  )
}

export default Messages