import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'
import './index.css'
class WelcomeNavigation extends Component {

  componentWillUnmount(){

    localStorage.clear()


  }
  logout = (e) => {

    e.preventDefault()
    sessionStorage.clear()
    setTimeout(()=> {

    window.location.replace('/')

    },1000)


  }
  
  render(){
    const user_id = localStorage.getItem('user_id')
    console.log(user_id)
    return (
        <div className="welcomeNavigation">
            <ul>
            <li> <Link className="link" to="/create"> Create Todo </Link>  </li>
            <li>  <button onClick={this.logout}>Logout</button></li>
            </ul>
            <br />
        </div>
        
    )


  } 
}
export default withRouter(WelcomeNavigation)