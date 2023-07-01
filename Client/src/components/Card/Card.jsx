import style from './Card.module.css';
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions.js'
import { connect } from 'react-redux'
import { useState, useEffect } from 'react'


 function Card ({ character, onClose, addFav, removeFav, myFavourites }) {
   const { id, name, species, image, status } = character
   
   const [isFav, setFavs] = useState(false);

   const handleFavorite = () => {
      if(window.location.pathname === "/home"){
         isFav ? removeFav(id) : addFav(id);
         setFavs(!isFav);
      }
   }

   const handleOnClose = () => {
      if(onClose){ 
         onClose(id);
      }
   }

   useEffect(() => {
      if(myFavourites){ 
         myFavourites.forEach((fav) => {
            if (fav && fav.id === id) {
               setFavs(true);
            }
         });
      }
   }, [myFavourites, id]);

   return (
      <div className= {style.container}>
         <button onClick={handleOnClose}  className={style.closeButton}>X</button>
         {window.location.pathname === "/home" ? (
            isFav ? (
               <button onClick={handleFavorite} className={style.favBtn}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.favBtn}>🤍</button>
            )
         ) : (
            <button className={style.favBtnDisabled}>❤️</button>
         )}

         <img src={image} alt={name} />
           <Link to={`/detail/${id}`} >
            <h2>Nombre: {name}</h2>
           </Link>
         <h2>Status: {status}</h2>
         <h2>Especie: {species}</h2> 
         
      </div>
   );
}
  
   const mapDispatchToProps = (dispatch) => {
      return{
         removeFav: (id) => dispatch(removeFav(id)),
         addFav: (id) => dispatch(addFav(id)),
      }
   }

   const mapStateToProps = (state) => {
      return{
         myFavourites: state.myFavourites
      }
   }

 export default connect(mapStateToProps,mapDispatchToProps)(Card)  