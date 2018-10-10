import React, { Component } from 'react'
import axios from 'axios'

export default class EditUserForm extends Component {
    state = {
        name: ''
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
