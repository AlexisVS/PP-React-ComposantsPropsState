import React, { Component } from "react";
import Toto from "./Toto";

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
    }

    ordreMere = () => {
        this.setState({
            messageMaman: "Va ranger ta chambre"
        })
    }

    ordreToto = () => {
        this.setState({
            messageToto: "D'accord"
        })
    }



render() {
    return (
        <div>
            <h1>Maman</h1>
            <button onClick={this.ordreMere} >Ordre de la mère</button>
            <p>{this.state.messageMaman}</p>
            <br /><br /><hr /><br /><br />
            <Toto name="Toto" ordreToto={this.ordreToto} leState={this.state} />
        </div>
    )
}
}
export default Maman;