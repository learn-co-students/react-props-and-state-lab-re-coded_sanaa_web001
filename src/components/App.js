import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import fetchMock from '../fetch-setup'

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

  fetchData(){
    // fetchMock("/api/pets")
    // .then(response=>response.json())
    // .then(data=>{
    //   console.log(data)
    // })
  }
  render() {
    this.fetchData();
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
// <App />
//     Filters
//       ✓ should change filter type
//     Fetching pets
//       1) should fetch all pets by default
//       2) should fetch pet types using the type parameter based on the filter
//     Adopting pets
//       3) should set a pet's adopted status to true
