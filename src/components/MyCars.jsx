import React from "react"
import Cars from "./Cars"

class MyCars extends React.Component {
  state = {
    voitures: [
      { name: "ford", color: "red", year: 2000 },
      { name: "mercedes", color: "pink", year: 2021 },
      { name: "Peugeot", color: "purple", year: 2005 },
    ],
    titre: "Mon catalogue voiture",
  }
  noCopy = () => {
    alert('Merci de ne pas copier le texte')
  }
  mouseOver = (e) => {
    e.target.style.color = 'red'
  }
  addYear = () => {
    const updateState = this.state.voitures.map((element) => {
      return element.year -= 10
    })
    this.setState({
      updateState
    })
  }

  render () {
    const year = new Date().getFullYear();

    return (
      <div>
        <h1 onMouseOver={this.mouseOver}>{this.state.titre}</h1>

        <p onCopy={this.noCopy}>lorem ipsum no copy</p>

        {
          this.state.voitures.map((voiture, index) => {
            return (
              <Cars
                key={index}
                color={voiture.color}
                year={voiture.year < 2 ? year - voiture.year + 'an' : year - voiture.year + 'ans'}>{voiture.name}
              </Cars>
            )
          })
        }

        <button onClick={this.addYear} type="button">+10ans</button>
      </div>
    )
  }
}

export default MyCars