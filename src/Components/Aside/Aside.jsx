import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

import './Aside.scss'

const Aside = () => {
  return (
    <div className='aside-container'>
        <Logo/>
        <Menu/>
    </div>
  )
}

export default Aside