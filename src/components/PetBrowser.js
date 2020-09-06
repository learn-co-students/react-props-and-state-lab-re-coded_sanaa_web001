import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  renderPets = (pets) => {
    return pets.map((singlePet) => (
      <Pet
        pet={singlePet}
        key={singlePet.id}
        onAdoptPet={this.props.onAdoptPet}
      />
    ));
  };
  render() {
    return <div className="ui cards">{this.renderPets(this.props.pets)}</div>;
  }
}

export default PetBrowser;
