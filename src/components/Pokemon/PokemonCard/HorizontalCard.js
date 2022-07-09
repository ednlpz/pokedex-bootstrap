import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import SelectedPokemonContext from '../../Contexts/SelectedPokemonContext'
import InformationField from '../InformationField/InformationField'
import SpriteContainer from '../PokemonSprite/SpriteContainer'
import { ChevronRight, ChevronLeft } from '../../Icons/Icons'
import { useNavigate, useParams } from 'react-router-dom'
import StatTable from '../StatTable/StatTable'
import PokemonTypeContainer from '../PokemonTypeContainer/PokemonTypeContainer'
import PokemonAbilitiesContainer from '../PokemonAbilitiesContainer/PokemonAbilitiesContainer'

const HorizontalCard = () => {
  const { pokemon } = useContext(SelectedPokemonContext)

  return (
    <Card>
      <Card.Header className='d-flex justify-content-between'>
        <NavigationButtons />
      </Card.Header>
      <Row class='g-0'>
        <SpriteContainer
          name={pokemon.name}
          sprite={`${pokemon.sprites.other['official-artwork'].front_default}`}
        />
        <Card.Body className='d-flex flex-column h-100 col-md-8'>
          <PrimaryInformation />
          <SecondaryInformation />
        </Card.Body>
      </Row>
    </Card>
  )
}

const NavigationButtons = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  return (
    <>
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
    </>
  )
}

const PrimaryInformation = () => {
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

const SecondaryInformation = () => {
  const { pokemon } = useContext(SelectedPokemonContext)

  return (
    <Card.Text className='d-flex flex-column gap-4 h-100 justify-content-md-center'>
      <Row>
        <Col className='d-flex justify-content-center justify-content-md-start'>
          <InformationField
            label={'Height:'}
            value={`${pokemon.height} Meters`}
          />
        </Col>
        <Col className='d-flex justify-content-center justify-content-md-start'>
          <InformationField label={'Weight:'} value={`${pokemon.weight} KG`} />
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
      <Row className='px-2 d-flex flex-shrink-1'>
        <StatTable />
      </Row>
    </Card.Text>
  )
}

export default HorizontalCard
