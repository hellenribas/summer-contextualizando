import { useEffect, useState } from "react";
import AppContext from "./appContext";

function AppProvider ({ children }) {
  const [ name, setName ] = useState('');
  const [ episode, setEpisode ] = useState('maior que');
  const [ quanty, setQuanty ] = useState('');
  const [ gender, setGender ] = useState('');
  const [ data, setData ] = useState([]);

  const handleName = ({ target }) => {
    setName(target.value);
  }

  const handleQuanty = ({ target }) => {
    setQuanty(target.value);
  }

  const handleGender = ({ target }) => {
    setGender(target.value);
  }

  const handleEpisode = ({ target }) => {
    setEpisode(target.value);
  }

  useEffect(() => {
    const requestAPI = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await response.json();
        setData(results);
      } catch(e) {
        throw new Error(e.message);
      }
    }
    requestAPI();
  }, [])

  const contexto = {
    data,
    name,
    gender,
    episode,
    handleEpisode,
    handleGender,
    handleName,
    quanty,
    handleQuanty
  }

  return (
    <AppContext.Provider value={ contexto }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;