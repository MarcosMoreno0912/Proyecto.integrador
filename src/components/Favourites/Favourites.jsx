import { connect } from 'react-redux'
import Card from '../Card/Card.jsx'
import style from './Favourites.module.css'
import {filterCards, orderCards } from '../../redux/actions.js'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Favourites = ({myFavourites}) => {
	const [aux, setAux] = useState(false)

	const dispatch = useDispatch();

	const handleOrder = (event) => {
		dispatch(orderCards(event.target.value))
		setAux(!aux)
	}

	const handleFilter = (event) => {
		dispatch(filterCards(event.target.value))
	}

	return(
		<div className={style.favs}>
			<select onChange={handleOrder} className={style.btn}>
				<option value="A"> Ascendente</option>
				<option value="D">Descendente</option>
			</select>
			<select onChange={handleFilter} className={style.btn}>
				<option value="Male">Male</option>
				<option value="Female">Female</option>
				<option value="Genderless">Genderless</option>
				<option value="unknown">unknown</option>
			</select>

		  {
			myFavourites.map((id, character, onClose) =>{
				return(
					<Card
					key={id}
					id={id}
					character={character}
					onClose={onClose}
					/>
				)
			})
		   }	
		</div>

	)
}

const mapStateToProps = (state) =>{
	return{
		myFavourites: state.myFavourites
	}
}

export default connect(mapStateToProps, null)(Favourites) 