import React from 'react'
import './Element.css'

const Element = ({photo,nom,categorie}) => {
  return (
   <li>
    {photo}
    <div><strong>Nom: </strong>{nom} </div>
    <div><strong>Catégorie: </strong>{categorie}</div></li>
 
 
)

  
};

export default Element
