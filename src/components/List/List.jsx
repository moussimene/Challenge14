import React from 'react'
import'./List.css'
import Element from '../Element/Element.jsx'

const List = ({elements}) => {
  console.log(elements)
  return (
     
       <ul className='list'>

      {elements.map((pokemon,index)=> (
        <Element
        key={index}      
        photo={pokemon.photo}
        nom={pokemon.nom}
        categorie={pokemon.categorie}
        />
     ) )}



        </ul>
   
 
  
  )
}

export default List
