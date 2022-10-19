import React, { useContext } from 'react'
import AppContext from '../context/appContext'

export default function Forms() {
  const { name, handleName, gender, handleGender, episode, handleEpisode, quanty, handleQuanty } = useContext(AppContext);

  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input type="text" id="name" value={ name } onChange={ handleName } />
      </label>
      <label htmlFor="gender">
        Gênero:
        <select name="gender" id="gender" value={ gender } onChange={ handleGender }>
          <option value="">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label htmlFor="episode">
        Episódios:
        <select name="episode" id="episode" value={ episode } onChange={ handleEpisode }>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input type="text" value={ quanty } onChange={ handleQuanty } />
      </label>
      <button>Filtrar Episódio</button>
    </form>
  )
}
