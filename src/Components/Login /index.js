import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
class Login extends Component {

    constructor(props){

        super(props);
        this.state = {

            username: "",
            password:"",
    
        }           
    }
    
    HandleInputChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value
        this.setState({

            [name] : value
            
        })
        
    }

    loginUser = (e)  =>{

        e.preventDefault()
        const user = this.state
        const username = this.state.username
        const password = this.state.password
        console.log(user)
        console.log(this.state)
        axios.post('https://todolist-auth-express-server.herokuapp.com/api/auth/signin',{username,password})
        .then(res =>{

            console.log(res.data)
            sessionStorage.setItem('token', res.data.accessToken);
            sessionStorage.setItem('user_id',res.data.id);
            sessionStorage.setItem('username',res.data.username);
            console.log(sessionStorage.getItem('token'))
            console.log(sessionStorage.getItem('user_id'))
            setTimeout(()=> {

                window.location.replace('/dashboard')

            },1000)
          

        })
        
        .catch(err => {
            console.log(err.messege)
        })

    }


    render() {
        return (
               <div className="login">
            <h4> Login to Todolist </h4>
            <input name="username" type="text" placeholder="Enter Username" onChange={this.HandleInputChange} />
            <input name="password" type="password" placeholder="Enter Password" onChange={this.HandleInputChange} /> 
            <button onClick={this.loginUser}> Submit </button>
            </div>
        )
    }
}
export default  withRouter(Login)