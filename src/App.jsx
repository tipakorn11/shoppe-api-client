import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
import "./style"
const TheLayout = React.lazy(() => import("./container/layout"))
export default function App() {
  return (
    <BrowserRouter>
          <React.Suspense>
            <Switch>
              {/* <Route
                exact
                path="/401"
                name="Page 401"
                render={(props) => <Page401 {...props} />}
              /> */}
              <Route
                path="/"
                name="หน้าแรก"
                render={(props) => <TheLayout {...props} />}
              />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
  )
}
