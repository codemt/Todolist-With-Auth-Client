import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class EditTodo extends Component {


    constructor(props){

            super(props);
            this.state = {

                id: props.match.params.id,
                todo: '',
                title: ''


            }
    }
    componentDidMount(){

        axios.get(`http://localhost:8080/api/todo/${this.state.id}`)
            .then(res=>{

                console.log(res.data)
                console.log(res.data.todo)
                this.setState({

                    todo : res.data.todo,
                    title : res.data.title
                   
                })

            })
            console.log(this.state)

    }
    handleInputChange = (e) => {

        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({

            [name]: value

        })
        console.log(this.state)

    }

    UpdateTodo = (e) => {

        e.preventDefault()
        const id = this.state.id
        const todo = this.state.todo
        axios.put(`http://localhost:8080/api/todo/`+id,{todo})
        .then(res => {

            console.log(res.data)
            setTimeout(()=>{

                    window.location.replace('/dashboard')

            },500)

        })
        .catch(err => {

            console.log(err.messege)

        })

    }

    render() {
        return (
            <div class="editTodo">
                <h3> Edit Todo </h3>
                <label>Title</label> 
                <input className="title" name="title" type="text" value={this.state.title} disabled />
                <label> Todo </label> 
                <input name="todo" type="text" onChange={this.handleInputChange}  value={this.state.todo} />
                <button onClick={this.UpdateTodo}> Submit </button>
            </div> 
        )
    }
}
