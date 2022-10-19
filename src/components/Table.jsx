import React, { useContext } from 'react'
import AppContext from '../context/appContext'

export default function Table() {
  const { data, name, gender } = useContext(AppContext);
  return (
    <table>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Espécie</td>
          <td>Gênero</td>
          <td>Status</td>
          <td>Quantidade de Episódios</td>
        </tr>
      </thead>
      <tbody>
        {
          data?.filter((el) => el.name.toUpperCase().includes(name.toUpperCase()))
          .filter((elem) => elem.gender.toUpperCase().includes(gender.toUpperCase()))
          .map((e) => (
            <tr key={ e.id }>
              <td>{e.name}</td>
              <td>{e.species}</td>
              <td>{e.gender}</td>
              <td>{e.status}</td>
              <td>{e.episode.length}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
