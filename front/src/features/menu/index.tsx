import { useState } from 'react'
import burger from './burger.svg'
import './style.css'
import MenuList from './ui/menu-list'

function Menu() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <div className="menu">
      <button className="burger" onClick={() => setIsMenuActive(true)}>
        <img src={burger} alt="Menu" />
      </button>
      <MenuList
        active={isMenuActive}
        handleCloseMenu={() => setIsMenuActive(false)}
      />
    </div>
  )
}

export default Menu
