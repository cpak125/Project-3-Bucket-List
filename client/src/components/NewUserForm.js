import React, { Component } from 'react'
import axios from 'axios'


export default class NewUserForm extends Component {
    state = {
        name: ''
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const newUser = { ...this.state }
        newUser[attribute] = event.target.value
        this.setState(newUser)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.name
        }
        await axios.post('/api/users', payload)
        await this.props.getAllUsers()
        await this.props.toggleShowNewForm()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div> Name:
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
