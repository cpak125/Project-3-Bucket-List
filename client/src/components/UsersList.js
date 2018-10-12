import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
    /* color; */
}
span, .fa-home{
    font-size: 30px;
    color:#247ba0;
}
span:hover, .fa-home:hover{
    color: #70c1b3;
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
                <div key={i}>
                    <Link to={`/users/${user._id}`}>{user.name}</Link>
                </div>
            )
        })
        return (
            <div>
                <StyledUsersListPage>
                    <a href='/'><i className='fa fa-home'></i></a>
                    <h1>Users <span onClick={this.toggleShowNewForm}><i className='fa fa-plus-square'></i></span>
                    </h1>
                   
                    {usersList}

                    {this.state.showNewForm ?
                        <NewUserForm
                            toggleShowNewForm={this.toggleShowNewForm}
                            getAllUsers={this.getAllUsers} /> :
                        ''
                    }
                </StyledUsersListPage>

            </div>
        )
    }
}
