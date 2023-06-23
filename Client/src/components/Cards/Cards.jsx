import Card from '../Card/Card.jsx';
import style from './Cards.module.css'
import React from 'react';

export default function Cards({ characters, onClose }) {
   

   return (
      <div className= {style.cardContainer}>
          
            {characters.map((character) =>{
               
               return(
                 <Card 
                     key={character.id}
                     id={character.id}
                     character={character}
                     onClose= {onClose}
                  />
               )
            })
         }      
      </div>

   );
}

