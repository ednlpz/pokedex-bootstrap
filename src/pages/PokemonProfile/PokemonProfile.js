import { useParams } from 'react-router-dom'
import useFetch from '../../components/Hooks/useFetch'
import Layout from '../Layout/Layout'
import SelectedPokemonContext from '../../components/Contexts/SelectedPokemonContext'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import { Row } from 'react-bootstrap'
import HorizontalCard from './HorizontalCard'

const PokemonProfile = () => {
  const { id } = useParams()
  const [responseData, fetchStatus] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  )

  return (
    <Layout>
      <SelectedPokemonContext.Provider value={{ pokemon: responseData }}>
        <div className='p-4'>
          {fetchStatus.current === 'success' ? (
            <HorizontalCard />
          ) : (
            <Row className='d-flex align-items-center justify-content-center'>
              <LoadingSpinner />
            </Row>
          )}
        </div>
      </SelectedPokemonContext.Provider>
    </Layout>
  )
}

export default PokemonProfile

/* <div className='container grid grid-cols-1 grid-rows-2 gap-10 p-2 mx-auto bg-warning text-dark shadow-smooth rounded rounded-5'>
<div className={`d-flex flex-lg-row flex-column gap-10`}>
  <Col className="my-auto" sm={12} xs={12} md={12} lg={4} xl={4}>
    <SpriteContainer
      name={responseData.name}
      sprite={`${responseData.sprites.other['official-artwork'].front_default}`}
    />
  </Col>

  <Col className="w-100"  xs={12} md={4}>
    <InformationContainer>
      <>
        <InformationField
          label={'Name'}
          value={responseData.name}
        />
        <InformationField
          label={'ID Number'}
          value={responseData.id}
        />
        <InformationField
          label={'Weight'}
          value={`${responseData.weight} Kg`}
        />
        <InformationField
          label={'Height'}
          value={`${responseData.height} Meters`}
        />
      </>
    </InformationContainer>
  </Col>
  <Col>
    <InformationContainer>
      <Col>
        <PokemonTypeContainer types={responseData.types} />
        <PokemonAbilitiesContainer
          abilities={responseData.abilities}
        />
      </Col>
    </InformationContainer>
  </Col>
</div>

<div className='flex flex-col items-center gap-4 border-top pt-4'>
  <div className='flex flex-col items-center justify-center px-5'>
    <p className='mb-4 text-center fs-3'>Stats</p>
    <TableContainer />
  </div>
</div>
</div> */
