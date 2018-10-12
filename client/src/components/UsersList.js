import React, { Component } from 'react'
import axios from 'axios'
import NewUserForm from './NewUserForm';
import styled from 'styled-components'

const StyledUsersListPage = styled.div`
background-color: #ffe066;
background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
height: 100vh;
h1{
    text-align:center;
    font-family: 'Reenie Beanie', cursive;
    font-size:80px;
    color:#f25f5c;
    margin:5px 0 30px 0;
}
span, .fa-home{
    font-size: 30px;
    color:#247ba0;
    margin-left: 30px;
    margin-top: 20px;
}
span:hover, .fa-home:hover, a:hover{
    color: #70c1b3;
}
`
const StyledUserList = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
a{
    padding:7px;
    font-size:45px;
    font-family: 'Reenie Beanie', cursive;
    font-weight:bold;
    color:#247ba0;
    text-align:center;
}
.fa-home{
}
`

export default class Users extends Component {
    state = {
        users: [],
        showNewForm: false
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

    render() {
        const usersList = this.state.users.map((user, i) => {
            return (
                <StyledUserList key={i}>
                    <a href={`/users/${user._id}`}>{user.name}</a>
                </StyledUserList>
            )
        })
        return (
            <StyledUsersListPage>
                <a  className='home' href='/'><i  title='Home' className='fa fa-home'></i></a>
                <h1>Users <span onClick={this.toggleShowNewForm}><i title='Add New User' className='fa fa-plus-square'></i></span>
                </h1>

                {this.state.showNewForm ?
                    <NewUserForm
                        toggleShowNewForm={this.toggleShowNewForm}
                        getAllUsers={this.getAllUsers} /> : ''
                }

                {usersList}
            </StyledUsersListPage>
        )
    }
}
