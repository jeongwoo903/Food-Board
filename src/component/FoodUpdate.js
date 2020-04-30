import React, { Component } from 'react';


class FoodUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            menu: this.props.data.menu,
            desc: this.props.data.desc
        }
    }
    inputFormHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="desc">
                <h2>Update</h2>
                <form action="/UpdateProcess" method="post" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onSubmit(this.state.id, this.state.menu, this.state.desc);
                }}>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <input
                        type="text"
                        name="menu"
                        placeholder="menu"
                        style={{ width: 116 + 'px' }}
                        value={this.state.menu}
                        onChange={(e) => {
                            this.inputFormHandler(e)
                        }}
                    ></input><br />
                    <textarea
                        type="text"
                        name="desc"
                        placeholder="description"
                        value={this.state.desc}
                        onChange={(e) => {
                            this.inputFormHandler(e);
                        }}
                    ></textarea><br />
                    <button type="submit">submit</button>
                </form>
            </div>
        );
    }
}

export default FoodUpdate;