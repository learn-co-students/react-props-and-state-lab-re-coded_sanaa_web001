import React from 'react'

class Pet extends React.Component {

  render() {
    let petObj = this.props.pet;
    let button;
    if (petObj.isAdopted)
    button = <button className="ui disabled button">Already adopted</button>
    else
      button=<button className="ui primary button" onClick={()=>this.props.onAdoptPet(petObj.id)}>Adopt pet</button>
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {petObj.gender === 'male'? '♂' : '♀'}
           {petObj.name}
          </a>
          <div className="meta">
            <span className="date">{petObj.type}</span>
          </div>
          <div className="description">
            <p>Age: {petObj.age}</p>
            <p>Weight: {petObj.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {button}
        </div>
      </div>
    )
  }
}

export default Pet
