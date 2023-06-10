import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar'
import React from 'react'  
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component{
	

	render(){ 

		return(
			<div className={style.navSearch}>
			  <button className={style.routesButtons}>
				<NavLink to="/home" className={style.link} activeclassname={style.activeLink}>Home</NavLink>
			  </button>	
			  <button className={style.routesButtons}>
				<NavLink to="/about" className={style.link} activeclassname={style.activeLink}>About</NavLink>
			  </button>
			  <button className="style.routesButtons">
			  	<NavLink to="/favourites" className={style.link} activeclassname={style.activeclassname}>Favourite</NavLink>
			  </button>
				<SearchBar onSearch={this.props.onSearch} onRandom={this.props.onRandom}/>
			</div>
		);
	}
}

export default NavBar;