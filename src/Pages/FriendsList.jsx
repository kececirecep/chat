import React from 'react'
import './FriendsList.scss'
import Aside from '../Components/Aside/Aside'
import Friends from '../Components/FriendsList/Friends'

const FriendsList = () => {
  return (
    <div className='friendsList-container'>
        <Aside/>
        <Friends/>
    </div>
  )
}

export default FriendsList