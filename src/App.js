import React, { Component } from 'react';
import FoodTitle from './component/FoodTitle';
import FoodMenu from './component/FoodMenu';
import FoodDesc from './component/FoodDesc';
import Control from './component/Control';
import FoodCreate from './component/FoodCreate';
import FoodUpdate from './component/FoodUpdate';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "main",
      select_id: 1,
      last_id: 3,
      main: { menu: "파스타 / 종류", desc: "메뉴를 클릭해보세요" },
      food: [
        { id: 1, file: "menu1", menu: "까르보나라", desc: "크림 없이 베이컨과 치즈, 달걀, 후추만으로 맛을 내는 파스타 이다." },
        { id: 2, file: "menu2", menu: "알리오올리오", desc: "이탈리아 캄파니아 지방의 서민 요리로 오일 소스 파스타의 일종이다." },
        { id: 3, file: "menu3", menu: "뽀모도로", desc: "토마토를 사용한 파스타의 총칭. 소스를 만들어 사용해도 되고(로사), 잘라 넣어 볶아도(비앙카) 된다." }
      ]
    }
  }
  getReadMenu() {
    const state = this.state;
    for (let i = 0; i < state.food.length; i++) {
      if (state.food[i].id === state.select_id) {
        return state.food[i];
      }
    }
  }

  getMenu() {
    let _menu, _desc, _article, _content = null;
    const state = this.state;

    if (state.mode === "main") {
      _menu = state.main.menu;
      _desc = state.main.desc;
      _article = <FoodDesc menu={_menu} desc={_desc}></FoodDesc>;
    } else if (state.mode === "select") {
      _content = this.getReadMenu();
      _article = <FoodDesc menu={_content.menu} desc={_content.desc}></FoodDesc>;
    } else if (state.mode === "create") {
      _article = <FoodCreate onSubmit={(_menu, _desc) => {
        this.state.last_id++;
        let _food = [...this.state.food, { id: Number(this.state.last_id), file: `menu${this.state.last_id}`, menu: _menu, desc: _desc }];

        this.setState({
          food: _food,
          mode: "select",
          select_id: this.state.last_id
        });
      }}></FoodCreate>;
    } else if (state.mode === "update") {
      _content = this.getReadMenu();
      _article = <FoodUpdate data={_content} onSubmit={(_id, _menu, _desc) => {
        let _food = [...this.state.food];

        for (let i = 0; i < _food.length; i++) {
          if (_food[i].id === _id) {
            _food[i] = { id: _id, menu: _menu, desc: _desc };
            break;
          }
        }

        this.setState({
          food: _food
        });
      }}></FoodUpdate>;
    } else if (state.mode === "delete") {
      _article = <FoodCreate></FoodCreate>;
    }

    return _article;
  }

  render() {
    return (
      <div id="app">
        <FoodTitle
          changeInfo={() => {
            this.setState({ mode: "main" });
          }}></FoodTitle>
        <Control changeInfo={(_mode) => {
          if (_mode === "delete") {
            if (window.confirm("Really, Do you want to delete?")) {
              let _foods = [...this.state.food];
              for (let i = 0; i < _foods.length; i++) {
                if (_foods[i].id === this.state.select_id) {
                  _foods.splice(i, 1);
                  if (this.state.select_id === this.state.last_id) {
                    this.state.select_id--;
                  } else {
                    this.state.select_id++;
                  }
                  break;
                }
              }
              this.setState({ mode: "main", food: _foods });
            }
            alert("Deleted!");
          } else {
            this.setState({ mode: _mode });
          }
        }}></Control>
        <FoodMenu data={this.state.food}
          changeInfo={(id) => {
            this.setState({ mode: "select", select_id: Number(id) });
          }}></FoodMenu>
        {this.getMenu()}
      </div>
    );
  }
}

export default App;
//datatables의 그리드를 구성하게 될 데이터가 담겨있는 리스트는 반드시 "data" 라는 이름으로 전달받아야한다.
