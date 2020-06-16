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
        axios.post('http://localhost:8080/api/auth/signin',{username,password})
        .then(res =>{

            console.log(res.data)
            localStorage.setItem('token', res.data.accessToken);
            localStorage.setItem('user_id',res.data.id);
            localStorage.setItem('username',res.data.username);
            console.log(localStorage.getItem('token'))
            console.log(localStorage.getItem('user_id'))
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