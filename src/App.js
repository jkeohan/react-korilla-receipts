import React, { Component } from 'react';
import './App.css';
import Receipts from './Receipt'

const receipt1 = {
  person: "Karolin",
  order: {
    main: "Burrito",
    protein: "Organic Tofu",
    rice: "Purple Rice",
    sauce: "Green Crack",
    toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
    drink: "Korchata",
    cost: 22
  },
  paid: false
}
const receipt2 = {
  person: "Jerrica",
  order: {
    main: "Rice Bowl",
    protein: "Ginger Soy Chix",
    rice: "Sticky Rice",
    sauce: "Korilla",
    toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
    drink: "Korchata",
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: "Matt",
  order: {
    main: "Salad Bowl",
    protein: "Organic Tofu",
    rice: "none",
    sauce: "K'lla",
    toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
    drink: "Sparkling Blood Orange Soda",
    cost: 20
  },
  paid: false
}
let receipts = [receipt1, receipt2, receipt3]

class App extends Component {
  constructor () {
    super()

    this.state = {
      name: '' 
    }
  }

  handleName = (e) => this.setState({name: e.target.value})

  render () {
    return (
      <div>
        <h1 className="truck-name">Korilla Receipts</h1>
        <div className='container'>
          {receipts.map(rec => (
            <Receipts text={rec} valid={this.state.name}/>
          ))}
        </div>
        <div className='search'>
          <input type='text' placeholder='Search' onChange={this.handleName}></input>
        </div>
      </div>
    )
  }
}

export default App;
