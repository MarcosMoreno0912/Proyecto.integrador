import React from 'react'
import { useState } from 'react';
import style from './Form.module.css';
import { validation } from '../../Validation.js'
import { useNavigate } from 'react-router-dom'
import login_circle from '../Assets/login_circle.gif'

 const Form = ({ login }) => {
	const [userData, setUserData] = useState({
		email: '',
		password: ''
	})

	const [errors, setErrors] = useState({
		email: '',
		password: ''
	})

 const handleChange = (event) => {
 	setUserData({
 		...userData,
 		[event.target.name]: event.target.value
 	});
 	setErrors((prevSetErrors) => ({
 		...prevSetErrors,
 		[event.target.name]: validation({...userData, [event.target.name]: event.target.value}) 
 		[event.target.name]
 	}))
 }

 const navigate = useNavigate();

 const handleSubmit = (event) => {
 	event.preventDefault();
 	const validationErrors = validation(userData)
 	setErrors(validationErrors);
 	if(Object.keys(validationErrors).length === 0){
 		login(userData);
 		navigate("/home") 
 	}
 }

	return(
		<form className={style.formLogin}>
		 <img src={login_circle} alt="Bienvenido" />
		  <label>
		  	Email:
		  	<input type="text" name="email" value={userData.email} onChange={handleChange} placeholder="Email..."/>
		    {errors.email && <span className={style.error}>{errors.email} </span>}
		  </label>
		  
		  <label>
		  	Password:
		  	<input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password..."/>
		    {errors.password && <span className={style.error} >{errors.password} </span>}
		  </label>
		  
		  <button type="submit" onClick={handleSubmit}>Submit</button>
		</form>
	)
}

export default Form;