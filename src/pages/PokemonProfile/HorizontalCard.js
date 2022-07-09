import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import SelectedPokemonContext from '../../components/Contexts/SelectedPokemonContext'
import InformationField from './InformationField'
import PokemonAbilitiesContainer from './PokemonAbilitiesContainer'
import PokemonTypeContainer from './PokemonTypeContainer'
import SpriteContainer from './SpriteContainer'
import { ChevronRight, ChevronLeft } from '../../components/Icons/Icons'
import { useNavigate, useParams } from 'react-router-dom'
import PokemonPrimaryInformation from './PokemonPrimaryInformation'
import StatTable from './StatTable'

const HorizontalCard = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { pokemon } = useContext(SelectedPokemonContext)

  return (
    <Card>
      <Card.Header className='d-flex justify-content-between'>
        <Button
          onClick={() => navigate(-1)}
          variant='outline-secondary'
          className='d-flex align-items-center'
        >
          <span>
            <ChevronLeft />
          </span>
          <span>Back</span>
        </Button>
        <Button
          onClick={() => navigate(`/pokemon/${+id + 1}`)}
          variant='outline-secondary'
          className='d-flex align-items-center'
        >
          <span>Next</span>
          <span>
            <ChevronRight />
          </span>
        </Button>
      </Card.Header>
      <Row class='row g-0'>
        <SpriteContainer
          name={pokemon.name}
          sprite={`${pokemon.sprites.other['official-artwork'].front_default}`}
        />

        <Card.Body className='d-flex flex-column h-100 col-md-8'>
          <PokemonPrimaryInformation />
          <Card.Text className='d-flex flex-column gap-4 h-100 justify-content-md-center'>
            <Row>
              <Col className='d-flex justify-content-center justify-content-md-start'>
                <InformationField
                  label={'Height:'}
                  value={`${pokemon.height} Meters`}
                />
              </Col>
              <Col className='d-flex justify-content-center justify-content-md-start'>
                <InformationField
                  label={'Weight:'}
                  value={`${pokemon.weight} KG`}
                />
              </Col>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center justify-content-md-start'>
                <PokemonTypeContainer types={pokemon.types} />
              </Col>
              <Col className='d-flex justify-content-center justify-content-md-start'>
                <PokemonAbilitiesContainer abilities={pokemon.abilities} />
              </Col>
            </Row>
            <Row className="px-2 d-flex flex-shrink-1">
              <StatTable />
            </Row>
          </Card.Text>
        </Card.Body>
      </Row>
    </Card>
  )
}

export default HorizontalCard
