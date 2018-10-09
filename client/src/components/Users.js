import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm';

export default class Users extends Component {
    state = {
        users: [],
        showNewForm: false
    }

    getAllUsers = async ()=> {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
    }
    componentDidMount = async () => {
        this.getAllUsers()
    }

    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    render() {
        const usersList = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    {user.name}
                </div>
            )
        })
        return (
            <div>
                <h1>Users</h1>
                {usersList}
                <div>
                    <button onClick={this.toggleShowNewForm}>Create New User</button>
                </div>
                {this.state.showNewForm ?
                    <NewUserForm  
                    toggleShowNewForm ={this.toggleShowNewForm}
                    getAllUsers={this.getAllUsers}/> :
                    ''
                }

            </div>
        )
    }
}
