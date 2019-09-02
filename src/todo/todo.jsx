import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import axios from 'axios'

import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.handleMakedAsDone = this.handleMakedAsDone.bind(this)
        this.handleMakedAsPending = this.handleMakedAsPending.bind(this)
        
        this.refresh()

        this.state = {
            description: '',
            list: []
        }
    }
    handleChange(e){
        this.setState({
            ...this.state,
            description: e.target.value,
            })

    }
    refresh (description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({
                    ...this.state,
                    description,
                    list: resp.data
                }))
    }
    handleAdd(){
        const description = this.state.description
            axios.post( URL, { description })
                .then(resp => this.refresh())
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }
    handleMakedAsDone (todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description))
    }
    handleMakedAsPending (todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.description))
    }
    handleSearch (){
        this.refresh(this.state.description)
    }
    handleClear (){
        this.refresh()
    }
    render () {
        return (
            <div>
                <PageHeader 
                    name='Tasks'
                    small='  register'
                />
                <TodoForm
                    description = {this.state.description}
                    handleChange = {this.handleChange}
                    handleAdd = {this.handleAdd}
                    handleSearch = {this.handleSearch}
                    handleClear={this.handleClear} 
                />    
                <TodoList
                    // list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMakedAsDone={this.handleMakedAsDone}
                    handleMakedAsPending={this.handleMakedAsPending}
                />    
            </div>
        )
    }
}