import { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import SelectedPokemonContext from '../../components/Contexts/SelectedPokemonContext'

const PokemonPrimaryInformation = () => {
  const { pokemon } = useContext(SelectedPokemonContext)

  return (
    <div className='d-flex flex-column align-items-center align-items-md-start'>
      <h1 class='card-title text-uppercase fs-6'>{`ID: #${pokemon.id}`}</h1>
      <Card.Title className='d-flex justify-content-between'>
        <h1 class='card-title text-uppercase fs-1 '>{pokemon.name}</h1>
      </Card.Title>
    </div>
  )
}

export default PokemonPrimaryInformation
