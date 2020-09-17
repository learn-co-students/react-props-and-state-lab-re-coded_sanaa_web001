import React from 'react'


class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}


export default Pet

// Pet />
//     Rendering props
//       6) should render the name
//       7) should render the correct gender icon for male pets
//       8) should render the correct gender icon for female pets
//       9) should render the pet type
//       10) should render the pet age
//       11) should render the pet weight
//     Adopting a pet
//       Pet is not adopted yet
//         12) should only show the adopt button
//         13) should call the `onAdoptPet` callback prop when the adopt button is clicked
//         14) should call the `onAdoptPet` callback prop with the pet ID
//       Pet is already adopted
//         15) should only show the already adopted button
//         ✓ should not call the `onAdoptPet` callback prop when the button is clicked
