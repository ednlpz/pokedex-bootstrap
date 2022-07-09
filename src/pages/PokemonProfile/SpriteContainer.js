import PokemonSprite from '../../components/Pokemon/PokemonSprite/PokemonSprite'

const SpriteContainer = ({ name, sprite }) => {
  return (
    <div className='h-auto w-72 sm:w-96 col-md-4 d-flex flex-shrink-0'>
      <PokemonSprite name={name} sprite={sprite} />
    </div>
  )
}

export default SpriteContainer
