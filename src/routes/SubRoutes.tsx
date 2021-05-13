import { Route, Switch, withRouter } from 'react-router-dom'
import ProtectedRoute from './Protected'

export interface SubRouteConfig {
  key: string
  path: string
  prefix?: string
  exact?: boolean
  isProtected: boolean
  component: any
}

const SubRoutes = (props: any) => {
  const { prefix = '' } = props

  return (
    <div>
      <Switch>
        {(props.subroutes || []).map((sr: SubRouteConfig) => {
          if (sr.isProtected) {
            return (
              <ProtectedRoute
                key={sr.key}
                path={`${sr.prefix || prefix}${sr.path}`}
                component={sr.component}
                exact={sr.exact}
              />
            )
          }
          return (
            <Route
              key={sr.key}
              path={`${sr.prefix || prefix}${sr.path}`}
              component={sr.component}
              exact={sr.exact}
            />
          )
        })}
      </Switch>
    </div>
  )
}

export default withRouter(SubRoutes)
