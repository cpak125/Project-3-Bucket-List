import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledNewUserForm = styled.div`
text-align:center;
font-family: 'Reenie Beanie', cursive;
font-size:35px;
font-weight:bold;
color:#f25f5c;
input{
    font-family: 'Reenie Beanie', cursive;
    font-size:30px;
    color:#247ba0;
    font-weight:bold;
    background-color:#70c1b3;
}
.add{
    background-color:#70c1b3
}
.add:hover{
    background-color:#f25f5c;
}
`



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
            <StyledNewUserForm>
                <form onSubmit={this.handleSubmit} >
                    <div> Name:
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                     <input className='add' type='submit' value='Add' />
                    </div>
                </form>
            </StyledNewUserForm>
        )
    }
}
