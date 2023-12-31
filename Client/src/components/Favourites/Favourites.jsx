import { connect } from 'react-redux'
import Card from '../Card/Card.jsx'
import style from './Favourites.module.css'
import { filterCards, orderCards, removeFav } from '../../redux/actions.js'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Favourites = ({myFavourites, removeFav}) => {
	const [aux, setAux] = useState(false)

	const dispatch = useDispatch();

	const handleOrder = (event) => {
		setAux(!aux)
		dispatch(orderCards(event.target.value))
	}

	const handleFilter = (event) => {
		dispatch(filterCards(event.target.value))
	}

	const handleOnClose = (id) => {
    	removeFav(id);
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

		  {myFavourites && myFavourites.length > 0 ? ( 
			myFavourites.map((character) => character &&( 
					<Card
					key={uuidv4()}
					character={character}
					onClose={handleOnClose}
					/>
				))
			  ) : (
			  	<p>No favorites selected.</p>
			  )}	
		</div>
	)
}

const mapStateToProps = (state) => {
	return{
		myFavourites: state.myFavourites,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		removeFav: (id) => dispatch(removeFav(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites) 