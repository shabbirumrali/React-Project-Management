import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Sidebar, OnlineUsers } from './components'
import { Dashboard, Login, Signup, Create, Project } from './pages'
import { useAuthContext } from './hooks/useAuthContext'

import './App.css'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          { user && (<Sidebar />)}
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/login">
                {!user && <Login />}
                {user && <Redirect to="/" />}
              </Route>
              <Route path="/signup">
                {!user && <Signup />}
                {user && <Redirect to="/" />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/project/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
            </Switch>
        </div>
        {user && <OnlineUsers />}
      </BrowserRouter>
      )}
    </div>
  );
}

export default App