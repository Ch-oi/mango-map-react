import React, { Component } from 'react'
import ChatList from '../Chat/ChatList'
import ChatToolbar from '../Chat/ChatToolbar'
import SearchBar from '../Layout/SearchBar'


export default class BlogScreen extends Component {
    render() {
        return (

            <div>
                <ChatToolbar />
                <SearchBar/>
                <ChatList />

            </div>
        )
    }
}