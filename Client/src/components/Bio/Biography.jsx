import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import style from './Biography.module.css';

export const Biography = () => { 
   return (
      <div className={style.bio}>
         <h1>¡Bienvenido a mi biografía!</h1>
         <p>Me llamo Marcos Nahuel Moreno, y nací en el departamento de Rivadavia, Mendoza Argentina.</p>
         <p>Soy estudiante de la carrera Desarrollador Full Stack en el bootcamp de Henry.En este momento estás interactuando con mi primer proyecto de aplicación web.<br /><br /> Volviendo un poco más en el tiempo, viví hasta mis 16 años en mi provincia natal Mendoza. Allí me crié en un lugar muy tranquilo y natural, al ser una zona rural dónde predomina la vitivinicultura cómo principal actividad socio-económica. Hoy a mis 24 años, me encuentro viviendo en una provincia vecina, San Luis.<br />Y lo bien que me recibió esta provincia, con una mezcla de hermosos paisajes y una vida más activa, ya que estoy ubicado en la ciudad capital. Y para mí siendo alguien del campo, costó adaptarse pero eso no tardaría mucho.<br />¿Cómo fué que terminé en el mundo IT?, bueno la respuesta a esa pregunta llevó años de buscar encontrar el equilibrio entre la pasión, habilidades y metas por cumplir. Ya desde chico, comencé a familiarizarme con la informática y era algo que me gustaba. Hasta que empecé mi primer curso de informática cuando iba a la primaria, allí aprendí a manejar los programas básicos cómo WordPad, Word, Paint, Excel y PowerPoint. Ahora me encuentro creando contenido web y haciendo lo que me gusta, y eso es reconfortante. <br />Gracias por haber leído la versión ultra-comprimida de mi historia de vida, más abajo te dejaré links de mis redes sociales para que me sigas y apoyes.<br /> Gracias. </p>

         <div>
            <a href="https://twitter.com/tu_usuario_de_twitter">
               <FaTwitter />
            </a>
            <a href="https://www.instagram.com/tu_usuario_de_instagram">
               <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/tu_perfil_de_linkedin">
               <FaLinkedin />
            </a>
         </div>
      </div>
   );
}
