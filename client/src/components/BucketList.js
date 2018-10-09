import React, { Component } from 'react'
import axios from 'axios'

export default class BucketList extends Component {
    state = {
        user: {},
        bucketList: []
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

    render() {
        const bucketList =this.state.bucketList.map((bucketList, i)=>{
            return (
            <div key={i}>{bucketList.description}</div>
            )
        })
        return (
            <div>
                <h1>{this.state.user.name}'s Bucket List</h1>
                {bucketList}
            </div>
        )
    }
}
