import React from 'react'
import style from './Error.module.css'
import error from '../Assets/error.jpg'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
	return(
		<div className={style.errorMessage}>
		<img src={error} alt= 'Error 404' />
		<p>La página que estás buscando no existe.</p>
		<Link to="/home" >Back to Home</Link>
		</div>
	)
}

export default ErrorPage;
