import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledEditUserForm = styled.div`
text-align:center;
font-family: 'Reenie Beanie', cursive;
font-size:35px;
font-weight:bold;
color:#f25f5c;
margin-top: 20px;
margin-bottom:20px;
input{
    font-family: 'Reenie Beanie', cursive;
    font-size:25px;
    color:#247ba0;
    font-weight:bold;
    background-color:#70c1b3;
}
.update{
    background-color:#70c1b3
}
.update:hover{
    background-color:#50514f;
}
`


export default class EditUserForm extends Component {
    state = {
        user: {}
    }

    getUser = async () => {
        const userId = this.props.userId
        const response = await axios(`/api/users/${userId}`)
        this.setState({
            user: response.data,
            bucketList: response.data.bucketList
        })
    }

    handleChange = (event) => {
        const updatedUser = { ...this.state.user }
        updatedUser[event.target.name] = event.target.value
        this.setState({ user: updatedUser })
    }

    handleUpdate = async () => {
        const userId = this.props.userId
        const updatedUser = this.state.user
        await axios.put(`/api/users/${userId}`, updatedUser)
    }

    componentDidMount = () => {
        this.getUser()
    }

    render() {
        return (
            <StyledEditUserForm>
                <form onSubmit={this.handleUpdate}>
                    Name:<input type='text' name='name' onChange={this.handleChange} value={this.state.user.name} />
                    <input className='update' type='submit' value='Update' />
                </form>
            </StyledEditUserForm>
        )
    }
}
