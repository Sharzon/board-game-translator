import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Menu from '@/features/menu'

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
        <Menu />

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
