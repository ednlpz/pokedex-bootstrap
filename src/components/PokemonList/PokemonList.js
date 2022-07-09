import PokemonCard from '../Pokemon/PokemonCard/PokemonCard'
import isEqual from 'lodash.isequal'
import { memo, useCallback } from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

const PokemonList = ({ pokemons }) => {
  const renderPokemonList = useCallback(() => {
    if (pokemons.length <= 0) {
      return (
        <div className='w-100 h-100 d-flex justify-content-center align-items-center fs-2'>
          No more pokemons
        </div>
      )
    }

    return pokemons.map((pokemon) => (
      <Col
        className='d-flex justify-content-center'
        key={pokemon.name}
      >
        <PokemonCard pokemonInformation={pokemon} />
      </Col>
    ))
  }, [pokemons])

  return <Row className='gap-3'>{renderPokemonList()}</Row>
}
export default memo(PokemonList, isEqual)
