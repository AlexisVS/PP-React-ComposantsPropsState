import React, { Component } from 'react'
import Maman from './components/Maman'
import MyCars from './components/MyCars'
import Musiciens from './components/Musiciens'

class App extends Component {

  changeTitle = (e) => {
    let res = window.prompt('Entre ton texte')
    this.setState({ titre: res })
  }

  changeTitleWithParam = (titre) => {
    this.setState({
      titre: titre
    })
  }

  changeTitleWithBind = (param) => {
    this.setState({
      titre: param
    })
  }

  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value
    })
  }

  render () {

    return (
      <div className="App" >
        <MyCars/>

        <button
          onClick={this.changeTitle}
        >Changer le nom du titre</button>

        <button
          onClick={() => this.changeTitleWithParam("mon nouveau titre")}
        >Changer le nom du titre avec parametre</button>

        <button
          onClick={this.changeTitleWithBind.bind(this, "titre via bind")}
        >Changer le nom du titre par un .bind()</button>

        <input type="text" name="" id="" onChange={this.changeViaInput}/>
        <br /><br /><hr /><br /><br />
        <Maman/>

        <h2>destructuring</h2>

        <Musiciens/>

      </div>
    )
  }
}
export default App