import { Row } from "react-bootstrap"

const PokemonAbilitiesContainer = ({ abilities }) => {
  return (
    <Row className='d-flex flex-column items-center '>
      <p className='text-uppercase'>Abilities:</p>
      <div className='d-flex flex-md-row flex-column gap-md-2'>
        {abilities.map((abilitySlot, index) => (
          <p key={abilitySlot.ability.name}>
            {abilitySlot.ability.name}
            {index !== abilities.length - 1 && ','}
          </p>
        ))}
      </div>
    </Row>
  )
}

export default PokemonAbilitiesContainer
