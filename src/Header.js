import React from 'react'
import './Header.css'

function Header () {
  return (
    <header className="Header">
      <img src="images/logo.png" alt="Muzicisti Logo" width="200px"/>
    </header>
  )
}

export default React.memo(Header)
