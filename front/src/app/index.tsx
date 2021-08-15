import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from 'react-router-dom'

const Games = loadable(() => import('@/pages/games'))

const routes = [
  {
    path: '/games',
    component: Games,
    exact: true,
  },
]

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <Route
              path={route.path}
              component={route.component}
              exact={Boolean(route.exact)}
              key={i}
            />
          ))}
          <Route>
            <Redirect to="/games" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
