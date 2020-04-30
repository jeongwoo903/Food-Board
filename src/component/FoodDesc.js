import React, { Component } from 'react';


class FoodDesc extends Component {
    render() {
        let menu = this.props.menu;
        let desc = this.props.desc;
        return (
            <div className="desc">
                <h2>{menu}</h2>
                <div>{desc}</div>
            </div>
        );
    }
}

export default FoodDesc;