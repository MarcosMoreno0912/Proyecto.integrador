import React from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import style from './Detail.module.css'

const Detail = () => {

	const {id} = useParams()

	const [character, setCharacter] = useState(null)

	useEffect(() => {
   		axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setCharacter(data);
      })
      .catch((error) => {
        throw new Error('La página que busca no existe.');
      });
  }, [id]);

	if(!character){
		return <p>Cargando...</p>
	}

	return(
		<div className={style.detail}>
		      <img src={character.image} alt={character.name} />
      		<h1>Detalle del personaje</h1>
      		<h3>{character.name}</h3>
      		<p>Status: {character.status}</p>
      		<p>Especie: {character.species}</p>
      		<p>Género: {character.gender}</p>
      		<p>Origen: {character.origin?.name}</p>	
    	</div>	
	);
};

export default Detail;