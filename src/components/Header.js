import React from 'react'
import { Link } from 'react-router-dom'

function Header({ text }) {

  return (
    <header>
      <div className='container header'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header