import { Link } from 'react-router-dom'
import cn from 'classnames'
import './style.css'

export type MenuListProps = {
  active: boolean
  handleCloseMenu: React.ReactEventHandler<HTMLDivElement>
}

function MenuList({ active, handleCloseMenu }: MenuListProps) {
  return (
    <div className={cn('menu-list-wrapper', { active })}>
      <div
        className="menu-mask"
        onClick={handleCloseMenu}
        onKeyUp={handleCloseMenu}
        role="button"
        tabIndex={-1}
      />
      <ul className="menu-list">
        <li>
          <Link to="/games">Games</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuList
