import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHomePage = styled.div`
background-image: url('https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
height: 100vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
background-attachment: fixed;
text-align: center;
display:flex;
flex-direction:column;
justify-content:top;
align-items: center;

p{
    width:60%;
    font-size:30px;
    font-family: 'Reenie Beanie', cursive;
    font-weight:bold;
    margin:0 auto;
    position:relative;
}
h1{
    font-size:60px;
    font-family: 'Reenie Beanie', cursive;
    font-weight:bold;
    margin:20px 0 30px 0;
}
button, a{
    margin-top: 10px;
    font-size:20px;
    color:black;
    font-family: 'Reenie Beanie', cursive;
    font-weight:bold;
}
button:hover{
    background-color:gray;
}

`

export default class Home extends Component {
    render() {
        return (
            <StyledHomePage>
                <h1>Bucket ListR</h1>
                <p>Welcome to Bucket ListR! This app allows users to create their own personal Bucket List. Users can also view other user's Bucket List. Click "Enter" to get started.</p>
                <button><a href='/users'>Enter</a></button>
            </StyledHomePage>



        )
    }
}
