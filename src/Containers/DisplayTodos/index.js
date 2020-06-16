import React, { Component } from 'react'
import axios from 'axios'
import { Link  } from 'react-router-dom'
import './index.css'
export default  class DisplayTodos extends Component {

    state = {

        todos : []

    }
    
    componentDidMount(){

        const id = localStorage.getItem('user_id')
        axios.get(`https://todolist-auth-express-server.herokuapp.com/api/todo/all/${id}`)
        .then(res =>{

            console.log(res.data)
            this.setState({

                todos: res.data

            })
            console.log(this.state.todos)

        })
        .catch(err =>{


                console.log(err.messege)

        })


    }
    deleteTodo = (e) => {

        e.preventDefault();
        const id = e.target.id;
        console.log(id)
        axios.delete(`https://todolist-auth-express-server.herokuapp.com/api/todo/${id}`)
        .then(res =>{

            console.log(res.data)

            setTimeout(() =>{

               window.location.reload('/dashboard')

            },500)

        })
        .catch(err =>{

            console.log(err.messege);

        })
    }

    render() {
        return (
            <div className="todoList">
                <ul>
                {this.state.todos.map((todo)=>(
                <div class="todoItem">
                    <h4> {todo.title} </h4>
                    <p> {todo.todo} </p>
                        <a> <Link to={`/edit/todo/${todo.id}`}>Edit  </Link></a>
                        <button id={todo.id} onClick={this.deleteTodo}> Delete</button>
                 
                 </div>
                ))}
                </ul>
            </div>
        )
    }
}
