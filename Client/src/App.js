import React, { useState , useEffect } from 'react';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import axios from 'axios'
import { Route , Routes } from 'react-router-dom'
import { About } from './components/About/About.jsx'
import Favourites from './components/Favourites/Favourites.jsx'
import Detail from './components/Detail/Detail.jsx'
import ErrorPage from './components/Error/Error.jsx'
import Form from './components/Form/Form.jsx'
import { useLocation , useNavigate } from 'react-router-dom'
import style from './App.module.css'


export default function App() {

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
//   const EMAIL = 'moreno83marcos@gmail.com'
//   const PASSWORD = 'passRandM23'
   const navigate = useNavigate();

   async function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try{ 
        const { data } = await axios.get(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
      } catch (error){
         console.error(error)
      }   
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   async function onSearch(id) {
      try{ 
         const { data } = await axios.get(`http://rickandmortyapi.com/api/character/${id}`)
         if (data.name) {
            const exists = characters.find((character) => character.id === data.id);  
            if(exists){
               window.alert('¡Esta carta ya ha sido añadida!');
            }else{
               setCharacters((prevCharacters) => [...prevCharacters, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error){
         console.error(error);
      }
   }

   const onClose = (id) => {
      const numericId = parseInt(id);
     setCharacters((prevCharacters) =>
      prevCharacters.filter((character) => character.id !== numericId)
     );
   }

   function onRandom() {
    axios('https://rickandmortyapi.com/api/character/')
      .then(({ data }) => {
        const randomCharacter = data.results[Math.floor(Math.random() * data.results.length)];
        const exists = characters.find((character) => character.id === randomCharacter.id);
        if (exists) {
          window.alert('¡Este personaje ya ha sido añadido!');
        } else {
          setCharacters((prevCharacters) => [...prevCharacters, randomCharacter]);
        }
      })
      .catch((error) => {
        console.error('Error al obtener un personaje aleatorio:', error);
      });
   }

    const location = useLocation();
   
   return (
      <div className= {style.App} style= {{padding: "25px"}} > 
       {location.pathname !== '/' && <NavBar onSearch={onSearch} onRandom={onRandom}/>}
        <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} className={style.detail} />
            <Route path="/favourites" element={<Favourites onClose={onClose} />}/>
            <Route path= "/*" element={<ErrorPage />} />
            <Route exact path="/" element={<Form login={login}/>} />
         </Routes>   

      </div>
   );
}

 
