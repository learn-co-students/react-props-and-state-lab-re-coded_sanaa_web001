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
  handleTypeChange = (type) => {
    this.setState({
      filters: {type: type}
    })
  }
  handleFetchPets = ()=> {
    if (this.state.filters.type === "all"){
      fetch("/api/pets")
      .then(res => res.json())
      .then(pets => {
        this.setState({
          pets: pets
        })
      })
    }else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(res => res.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
    }
  }
  handleAdoptPet = (id) => {
    const adopted = [...this.state.pets]
    adopted.map(pet => {
      if (pet.id === id){
        pet.isAdopted = true
      }
    })
    this.setState({
      pets: adopted
    })
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
              <Filters onChangeType={this.handleTypeChange} onFindPetsClick={this.handleFetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
