import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }
  handleChangeType = (change) => {
    console.log(change);
    this.setState({ filters: { ...this.state.filters, type: change } });
  };

  handlePetsClick = () => {
    let endpoint = "/api/pets";

    if (this.state.filters.type !== "all") {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then((res) => res.json())
      .then((pets) => this.setState({ pets: pets }));
  };

  handleAdoptPet = (id) => {
    // console.log(id);
    console.log(this.state.pets.find((dog) => dog.id === id));
    const pets = this.state.pets.map((dog) => {
      if (dog.id === id) dog.isAdopted = true;
      return dog;
    });
    this.setState({
      pets: pets,
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handlePetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={(id) => this.handleAdoptPet(id)}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
