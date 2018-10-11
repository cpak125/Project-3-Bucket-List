import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class User extends Component {
    state = {
        user: {},
        bucketList: [],
        updateUser: false,
        redirect: false
    }

    getUser = async () => {
        const userId = this.props.match.params.userId
        const response = await axios(`/api/users/${userId}`)
        this.setState({
            user: response.data,
            bucketList: response.data.bucketList
        })
    }

    componentDidMount = () => {
        this.getUser()
    }

    handleDelete = async () => {
        const userId = this.props.match.params.userId
        await axios.delete(`/api/users/${userId}`)
        this.setState({ redirect: true })
    }

    handleChange = (event) => {
        const updatedUser = { ...this.state.user }
        updatedUser[event.target.name] = event.target.value
        this.setState({ user: updatedUser })
    }

    handleUpdate = async (event) => {
        const userId = this.props.match.params.userId
        const updatedUser = this.state.user
        await axios.put(`/api/users/${userId}`, updatedUser)
    }

    toggleUpdateUser = () => {
        this.setState({ updatedUser: !this.state.updateUser })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/users' />
        }
        const bucketList = this.state.bucketList.map((bucketList, i) => {
            return (
                <div key={i}>
                    <div >{bucketList.description}</div>
                </div>

            )
        })
        const editUserForm = (
            <form onSubmit={this.handleUpdate}>
                <input type='text' name='name' onChange={this.handleChange} value={this.state.user.name} />
                <input type='submit' value='Update User' />
            </form>
        )

        // const user= (
        //     <div>
        //         <h1>{this.state.user.name}'s Bucket List</h1>
        //     </div>
        // )
        return (
            <div>
                <h1>{this.state.user.name}'s Bucket List</h1>
                {this.state.updatedUser ? editUserForm : ''}
                <button onClick={() => this.toggleUpdateUser()}>Edit User</button>
                {bucketList}
                <button onClick={() => this.handleDelete()}>Delete User</button>
            </div>
        )
    }
}
