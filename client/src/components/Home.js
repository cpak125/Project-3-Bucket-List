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
p{
    vertical-align: center;
    margin:0 auto;
    padding:0;


}

`

export default class Home extends Component {
    render() {
        return (
            <StyledHomePage>
                <p>Welcome!</p>
                <a href='/users'>Enter</a>
            </StyledHomePage>



        )
    }
}
