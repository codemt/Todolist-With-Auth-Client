import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Login from './Components/Login ';
import LoginNavigation from './Components/LoginNavigation';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import LoginWelcome from './Components/LoginWelcome';
import WelcomeNavigation from './Components/WelcomeNavigation';
import CreateTodo from './Components/CreateTodo';
import EditTodo from './Containers/EditTodo';
function App() {
  return (
    <Router>
       {localStorage.getItem('token') == null ? <LoginNavigation />
        : <WelcomeNavigation />
      }
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact  path="/welcome" component={Welcome} />
        <Route exact  path="/dashboard" component={LoginWelcome} />
        <Route exact path="/create" component={CreateTodo} />
        <Route exact path="/edit/todo/:id" component={EditTodo} />
      </Switch>
    </Router>
  );
}

export default App;
