import React from 'react'

const Card = ({nombre, apellido, colorFavorito}) => {
  return (
    <div style={{flexDirection: 'column',float:'left', width: '300px', margin: '10%',padding: '10%',display:'flex', border: '1px solid green', backgroundColor:'lightgrey'}}>
    <h3>Hola {nombre} {apellido} ! </h3>
    <h4>Tu color favorito es  {colorFavorito} </h4>

    </div>
    
  )
}

export default Card
