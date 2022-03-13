import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Frontpage from './components/frontpage/front';
import AdminLogin from './components/AdminLogin/a-login';
import ManagerLogin from './components/manager/m-login';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Frontpage />
        </Route>

        <Route exact path="/adminlogin">
          {
            user && user._id ? <AdminLogin setLoginUser={setLoginUser} /> : <AdminLogin setLoginUser={setLoginUser}/>
          }
        </Route>
          <Route exact path="/managerlogin">
            {
              user && user._id ? <ManagerLogin setLoginUser={setLoginUser} /> : <ManagerLogin setLoginUser={setLoginUser}/>
            }
          </Route>
     
          <Route exact path="/ram">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
