import React from 'react'

export const PokemonCard = ({id, name, sprites = [], abilities}) => {
  return (
    <section style={{height : 200}}>
        <h2 className='text-capitalize'>#{id} - {name}</h2>


        <div>
           {sprites.map(function(sprite){
            return <img key={sprite} src={sprite} alt={name} />
           })}
        </div>
        <ul>
            {abilities.map(function(ability){
                return <li key={ability.ability.name}>{ability.ability.name}</li>
            })}
        </ul>
    </section>
  )
}
