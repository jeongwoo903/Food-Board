import React, { Component } from 'react';


class Food_title extends Component {
    render() {
        return (
            <header>
                <a href="/" onClick={(e) => {
                    e.preventDefault();
                    this.props.changeInfo();
                }}><h2>파스타 / 종류</h2></a>
                <p>분류: 식재료 | 면류 요리 | 이탈리아 요리</p>
            </header>
        );
    }
}

export default Food_title;