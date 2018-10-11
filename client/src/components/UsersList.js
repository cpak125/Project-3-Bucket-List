import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm';

export default class Users extends Component {
    state = {
        users: [],
        showNewForm: false,
        showEditForm: false,
    }

    getAllUsers = async () => {
        const response = await axios.get('/api/users')
        this.setState({ users: response.data })
    }


    componentDidMount = async () => {
        this.getAllUsers()
    }

    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }

    // toggleEditForm = () => {
    //     this.setState({ showEditForm: !this.state.showEditForm })
    // }

    // handleDelete = async (userId) => {
    //     await axios.delete(`/api/users/${userId}`)
    //     await this.getAllUsers()
    // }



    render() {
        const usersList = this.state.users.map((user, i) => {
            return (
                <div>
                    {/* <EditUserForm name={user.name} /> */}
                    <Link to={`/users/${user._id}`} key={i}>{user.name}</Link>
                    {/* <button onClick={() => this.handleDelete(user._id)}>Delete</button> */}
                </div>
            )
        })
        return (
            <div>
                <h1>Users <button onClick={this.toggleShowNewForm}>Add New User</button>
                </h1>
                <div>
                </div>
                {usersList}

                {this.state.showNewForm ?
                    <NewUserForm
                        toggleShowNewForm={this.toggleShowNewForm}
                        getAllUsers={this.getAllUsers} /> :
                    ''
                }
                {/* {this.state.showEditForm ?
                    <EditUserForm
                        getAllUsers={this.getAllUsers}
                        toggleEditForm={this.toggleEditForm} /> :
                    ''
                } */}

            </div>
        )
    }
}
