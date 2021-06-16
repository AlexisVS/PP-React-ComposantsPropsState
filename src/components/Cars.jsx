import React from "react"

const Cars = ({ children, color, year }) => {
    return (
        <div>
            <p>Marque : {children}</p>
            <p >Modele :{color}</p>
            <p>annee: {year}</p>
        </div>
        
    )
}
export default Cars