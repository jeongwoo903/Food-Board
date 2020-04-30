import React, { Component } from 'react';


class FoodMenu extends Component {
    shouldComponentUpdate(newProps, newState) {
        if (this.props.data !== newProps.data) {
            console.log("change!");
            return true;
        } else if (this.props.data === newProps.data) {
            console.log("not change");
            return false;
        }
    }

    render() {
        let menu = [];
        let food_data = this.props.data;

        for (let i = 0; i < food_data.length; i++) {
            menu.push(<li key={food_data[i].id}>
                <a
                    data-id={food_data[i].id}
                    href={`${food_data[i].file}.html`}
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.changeInfo(e.target.dataset.id);
                    }}
                >{food_data[i].menu}
                </a>
            </li>);
        }
        return (
            <div className="menu">
                <ul>
                    {menu}
                </ul>
            </div>
        );
    }
}

export default FoodMenu;