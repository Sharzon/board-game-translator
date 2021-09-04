import { Link } from 'react-router-dom'
import burger from './burger.svg'

function Menu() {
  return (
    <div>
      <img src={burger} alt="Menu" />
      <ul>
        <li>
          <Link to="/games">Games</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
