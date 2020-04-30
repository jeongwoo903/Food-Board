import React, { Component } from 'react';


class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="/create" onClick={(e) => { e.preventDefault(); this.props.changeInfo("create"); }}>Create</a></li>
                <li><a href="/update" onClick={(e) => { e.preventDefault(); this.props.changeInfo("update"); }}>Update</a></li>
                <li><button type="button" value="delete" onClick={(e) => { e.preventDefault(); this.props.changeInfo("delete"); }}>delete</button></li>
            </ul>
        );
    }
}

export default Control;