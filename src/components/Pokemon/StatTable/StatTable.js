import { useContext } from 'react'
import { Table } from 'react-bootstrap'
import SelectedPokemonContext from '../../Contexts/SelectedPokemonContext'
const StatTable = () => {
  const { pokemon } = useContext(SelectedPokemonContext)

  const getStatName = () => {
    return pokemon.stats.map((statSlot) => (
      <th
        key={statSlot.stat.name}
        className=' fs-6 text-uppercase fw-normal justify-content-center'
      >
        {statSlot.stat.name}
      </th>
    ))
  }

  const getStatValues = () => {
    return pokemon.stats.map((statSlot) => (
      <td
        key={`${statSlot.stat.name}${statSlot.base_stat}`}
        className='text-dark'
      >
        {statSlot.base_stat}
      </td>
    ))
  }

  return (
    <Table className='text-dark w-100' responsive>
      <thead className=''>
        <tr>{getStatName()}</tr>
      </thead>
      <tbody>
        <tr className=''>{getStatValues()}</tr>
      </tbody>
    </Table>
  )
}

export default StatTable
