import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import Welcome from '../Welcome';
 class Signup extends Component {


    constructor(props){

            super(props);
            this.state = {

                username: "",
                "email" : "",
                password:"",
                "roles":["user","user"],
        
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
    registerUser = (e)  =>{

        e.preventDefault()
        const user = this.state
        const username = this.state.username
        const password = this.state.password
        const email = this.state.email
        const roles = this.state.roles
        console.log(user)
        console.log(this.state)
        axios.post('http://localhost:8080/api/auth/signup',{username,email,password,roles})
        .then(res =>{

            console.log(res.data)
            setTimeout(()=> {

                this.props.history.push('/welcome')

            },1000)
          

        })
        
        .catch(err => {
            console.log(err.messege)
        })

    }



    render() {
      
        return (
            <div className="signup">
            <h4> Signup to Todolist </h4>
            <input name="username" type="text" placeholder="Enter Username" onChange={this.HandleInputChange} />
            <input name="email" type="email" placeholder="Enter Email"  onChange={this.HandleInputChange} />
            <input name="password" type="password" placeholder="Enter Password" onChange={this.HandleInputChange} /> 
            <button onClick={this.registerUser}> Submit </button>
            </div>
        )
    }
}
export default withRouter(Signup)