import { Col, Row } from 'react-bootstrap'
import PokemonType from '../../components/Pokemon/PokemonDetails/PokemonType'
const PokemonTypeContainer = ({ types }) => {
  return (
    <Row className='d-flex flex-column items-center'>
      <p className='text-uppercase'>Type(s):</p>
      <Col className='d-flex flex-md-row flex-column gap-2'>
        {types.map((type, index) => (
          <PokemonType key={`${type}${index}`} types={type} />
        ))}
      </Col>
    </Row>
  )
}

export default PokemonTypeContainer
