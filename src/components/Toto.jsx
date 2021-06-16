import React from 'react'


const Toto = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            {props.leState.messageMaman != null ? <button onClick={props.ordreToto}>réponse</button> : <button disabled >réponse</button>}

            {props.leState.messageToto != null ?
                <p>{props.leState.messageToto}</p>
                : null
            }
        </div>
    )
}
export default Toto