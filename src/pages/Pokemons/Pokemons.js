import { useState, useEffect, useRef } from 'react'
import useFetch from '../../components/Hooks/useFetch'
import Layout from '../Layout/Layout'
import CustomPagination from '../../components/Pagination/CustomPagination'
import PokemonList from '../../components/PokemonList/PokemonList'
import PaginationContext from '../../components/Contexts/PaginationContext'
import { useParams, useNavigate } from 'react-router-dom'

const Pokemons = () => {
  const { currentPageNumber } = useParams()
  const itemsPerPageRef = useRef(10)
  const navigate = useNavigate()

  //redirect to page 1 of the list if the given currentPageNumber params is not a number
  useEffect(() => {
    if (isNaN(currentPageNumber)) {
      navigate('/1', { replace: true })
    }
  }, [currentPageNumber, navigate])

  //Number(currentPageNumber - 1) was done to ensure index 0 is included
  const [fetchLink, setFetchLink] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=${
      Number(currentPageNumber - 1) * itemsPerPageRef.current
    }&limit=10`
  )

  const [responseData, fetchStatus] = useFetch(fetchLink)
  //fetch the next set of pokemons if page number changes
  useEffect(() => {
    setFetchLink(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        Number(currentPageNumber - 1) * itemsPerPageRef.current
      }&limit=${itemsPerPageRef.current}`
    )
  }, [currentPageNumber, itemsPerPageRef])

  return (
    <PaginationContext.Provider
      value={{
        currentPageNumber: Number(currentPageNumber - 1),
        itemsPerPage: itemsPerPageRef.current,
        maximumPageNumber:
          fetchStatus.current === 'success' &&
          Math.ceil(responseData.count / itemsPerPageRef.current),
      }}
    >
      <Layout>
        <>
          {fetchStatus.current === 'success' && (
            <div className='d-flex flex-column align-items-center gap-4 p-4'>
              <CustomPagination />
              <PokemonList pokemons={responseData.results} />
            </div>
          )}
        </>
      </Layout>
    </PaginationContext.Provider>
  )
}

export default Pokemons
