import React from 'react'
import logo from '../assets/logo.svg'

const Header = ({score}) => {
  return (
    <div className='header'>
     <div className='text'>
      <img src={logo} alt="logo" />
     </div>
     <div className='score-box'>
      <span>Score</span>
      <div className='score-box__score'>{score}</div>
     </div>
    </div>
  )
}

export default Header