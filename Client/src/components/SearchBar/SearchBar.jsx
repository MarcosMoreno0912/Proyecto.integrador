import style from "./SearchBar.module.css"
import { useState } from 'react'

export default function SearchBar({ onSearch , onRandom}){

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value) 
   }

   const handleSearch = () => {
      onSearch(id);
      setId(""); 
   }

   const handleRandom = () => {
      onRandom();
   }

   return (
      <div className={style.barSearch}>
         <input type='search' className={style.searchInput} value= {id} onChange={handleChange} placeholder="Buscar por ID"/>
         <button className={style.searchButton} onClick= {handleSearch}>Agregar</button>
          <button className={style.randomButton} onClick= {handleRandom}>Add Random</button>  
      </div>
   );
}

