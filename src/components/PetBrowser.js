import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetCard =()=>{
    return this.props.childrenpets.map((pet,index) =>{
      <Pet
          pet={pet}
          key={index}
          onAdoptPet={this.props.onAdoptPet}
        />
    })
  }
  render() {
    return <div className="ui cards">{this.generatePetCard}</div>
  }
}

export default PetBrowser
