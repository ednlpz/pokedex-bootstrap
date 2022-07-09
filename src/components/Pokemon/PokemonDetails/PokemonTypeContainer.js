import PokemonType from './PokemonType'

const PokemonDetails = ({ id, name, types }) => {
  return (
    <div className='d-flex flex-wrap gap-2 mt-4'>
      {types &&
        types.map((type, index) => (
          <PokemonType key={`${type}${index}`} types={type} />
        ))}
    </div>
  )
}

export default PokemonDetails
