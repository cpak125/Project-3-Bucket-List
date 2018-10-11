import React, { Component } from 'react'


export default class NewItemForm extends Component {
    state = {
        newItem: {
            description: ''
        }
    }

    handleChange = (event) => {
        const newItem = { ...this.state.newItem }
        newItem[event.target.name] = event.target.value
        this.setState({ newItem })
    }

   

    handleSubmit = (event) => {
        event.preventDefault()
        const newItem = { ...this.state.newItem }
        this.props.addNewItem(newItem)
        // this.setState({newUser:''})
    }


    render() {
        return (

            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} type="text" name="description" value={this.state.newItem.description} placeholder='Description' />
                <input type='submit' value='Add to Bucket List' />
            </form>

        )
    }
}
