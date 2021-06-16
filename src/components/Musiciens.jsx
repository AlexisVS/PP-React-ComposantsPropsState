import React, { Component } from 'react'
import Musicien from "./Musicien";

class Musiciens extends Component {
    render () {
        return (
            <div>
                <Musicien name="Jimi Hendrix" age="27" />
                <Musicien name="Eric Clapton" age="74" />
                <Musicien name="Stevie ray" age="65" />
            </div>
        )
    }
}
export default Musiciens