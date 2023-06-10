import React from 'react'
import Aboutimage from '../Assets/Aboutimage.jpg'
import style from './About.module.css'

const About = () => {
	return(
	<div className={style.about}>
         <h1>The Creator</h1>
         <img src= {Aboutimage} alt="Mi foto" />
         <p>Mi nombre es Marcos Moreno</p> 
         <p>Espero que disfrutes interactuar con mi página.</p>
    
         <div className={style.info}>
            <h1>Sobre Mí</h1>

         </div>

    </div>
    

	);
};

export { About };