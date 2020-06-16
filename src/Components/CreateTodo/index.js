import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import { withRouter } from 'react-router-dom'
class CreateTodo extends Component {

    state = {

        title : '',
        todo : ' ',
        user_id : sessionStorage.getItem('user_id')

    }

    handleInputChange = (e) => {


        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({

            [name] : value

        })
        console.log(this.state)

    }
    submitTodo = (e) => {

       

       const title = this.state.title
       const todo = this.state.todo
       const user_id = this.state.user_id
       console.log(user_id)

            e.preventDefault()
            axios.post('https://todolist-auth-express-server.herokuapp.com/api/todo/create',{title,todo,user_id})
            .then(res =>{

                console.log(res.data)
                setTimeout(() =>{

                        this.props.history.push('/dashboard')
                       //window.location.replace('/dashboard') 


                },500)

            })
            .catch(err =>{

                console.log(err.messege)

            })

    }


    render() {
        return (
            <div className="createTodo">
                <input name="title" onChange={this.handleInputChange} type="text" placeholder="Enter Todo Title" value={this.state.title} />
                <input name="todo"  onChange={this.handleInputChange} type="text" placeholder="Enter Todo"  value={this.state.todo} />
                <button onClick={this.submitTodo}> Submit </button>
            </div>
        )
    }
}
export default withRouter(CreateTodo)