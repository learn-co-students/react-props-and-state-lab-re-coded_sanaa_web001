import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = e => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onFindPetsClick = () => {
    if( this.state.filters.type !== 'all' ) {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(response => this.setState({pets: response})) 
    } else {
      fetch('/api/pets')
      .then(response => response.json())
      .then(response => this.setState({pets: response}))
    }
  }

  onAdoptPet = id => {
    const elementsIndex = this.state.pets.findIndex(element => element.id == id )
    let newArray = [...this.state.pets]
    newArray[elementsIndex] = {...newArray[elementsIndex], isAdopted: !newArray[elementsIndex].isAdopted}
    this.setState({
      pets: newArray,
      });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.filters.type !== 'all' ? this.state.pets.filter(pet => pet.type === this.state.filters.type) : this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
