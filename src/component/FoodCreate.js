import React, { Component } from 'react';


class FoodCreate extends Component {
    render() {
        return (
            <div className="desc">
                <h2>Create</h2>
                <form action="/CreateProcess" method="post" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onSubmit(e.target.childNodes[0].value, e.target.childNodes[2].value);
                }}>
                    <input type="text" name="menu" placeholder="menu" style={{ width: 116 + 'px' }}></input><br />
                    <textarea type="text" name="desc" placeholder="description"></textarea><br />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default FoodCreate;