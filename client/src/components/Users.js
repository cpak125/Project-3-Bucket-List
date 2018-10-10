import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm';

export default class Users extends Component {
    state = {
        users: [],
        showNewForm: false,
        toggleEditForm: false,
    }

    getAllUsers = async () => {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
        console.log(response.data)
    }
    componentDidMount = async () => {
        this.getAllUsers()
    }

    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    handleDelete = async (userId) => {
        await axios.delete(`/api/users/${userId}`)
        await this.getAllUsers()
    }

    render() {
        const usersList = this.state.users.map((user, i) => {
            return (
                <div key={i}>
                    <Link to={`/users/${user._id}`} key={i}>{user.name}</Link>
                    <button>Edit</button>
                    <button onClick={()=>this.handleDelete(user._id)}>Delete</button>
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
                        toggleShowNewForm={this.toggleShowNewForm}
                        getAllUsers={this.getAllUsers} /> :
                    ''
                }

            </div>
        )
    }
}
