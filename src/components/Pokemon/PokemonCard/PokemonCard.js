import useFetch from '../../Hooks/useFetch'
import PokemonDetails from '../PokemonDetails/PokemonTypeContainer'
import { memo } from 'react'
import isEqual from 'lodash.isequal'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'
const PokemonCard = ({ pokemonInformation }) => {
  const [responseData, fetchStatus] = useFetch(pokemonInformation.url)

  if (fetchStatus.current === 'loading') {
    return (
      <Card
        className='d-flex justify-content-center align-items-center'
        style={{ width: '18rem', height: '25rem' }}
      >
        <LoadingSpinner />
      </Card>
    )
  }

  if (fetchStatus.current === 'failed') {
    return <div>Unexpected Error</div>
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Link
        style={{ textDecoration: 'none' }}
        className='text-dark'
        to={`/pokemon/${responseData.id}`}
      >
        <Card.Img
          alt={responseData.name}
          variant='top'
          src={`${
            responseData.sprites.other['official-artwork'].front_default
              ? responseData.sprites.other['official-artwork'].front_default
              : '/placeholder.png'
          }`}
        />

        <Card.Body>
          <div className='justify-content-between d-flex'>
            <Card.Title>{responseData.name}</Card.Title>
            <Card.Title>#{responseData.id}</Card.Title>
          </div>
          <div className='justify-content-center d-flex'>
            <PokemonDetails types={responseData.types} />
          </div>
        </Card.Body>
      </Link>
    </Card>
    // <div className='rounded-lg flex flex-col shadow-lg bg-slate-100 bn xl:w-80 w-72 h-[26rem] justify-self-center overflow-clip hover:-translate-y-2 hover:shadow-xl transition'>
    //   {fetchStatus.current === 'success' && (
    //     <Link className='contents' to={`/pokemon/${responseData.id}`}>
    //       <>
    //         <div className='flex self-center justify-center w-full'>
    //           <span className='p-4 w-60'>
    //             <PokemonSprite
    //               name={responseData.name}
    //               sprite={`${responseData.sprites.other['official-artwork'].front_default}`}
    //             />
    //           </span>
    //         </div>

    //         <PokemonDetails
    //           id={responseData.id}
    //           types={responseData.types}
    //           name={responseData.name}
    //         />
    //       </>
    //     </Link>
    //   )}
    // </div>
  )
}

export default memo(PokemonCard, isEqual)
