import PaginationContext from '../Contexts/PaginationContext'
import { useContext, useCallback, useState} from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { useNavigate } from 'react-router-dom'

const CustomPagination = () => {
  const { currentPageNumber, maximumPageNumber } = useContext(PaginationContext)

  const navigate = useNavigate()

  const [pageNumbers, setPageNumbers] = useState([
    currentPageNumber + 1,
    currentPageNumber + 2,
    currentPageNumber + 3,
    currentPageNumber + 4,
    currentPageNumber + 5,
  ])

  const paginateToPrevPage = () => {
    //if first page then do not paginate to prev page
    if (currentPageNumber !== 0) {
      //if
      if (Number(currentPageNumber) + 1 === pageNumbers[0]) {
        setPageNumbers([
          currentPageNumber - 4,
          currentPageNumber - 3,
          currentPageNumber - 2,
          currentPageNumber - 1,
          currentPageNumber,
        ])
      }
      navigate(`/${Number(currentPageNumber)}`)
    }
  }

  const paginateToNextPage = () => {
    //if reach last page next button has no effect
    if (Number(currentPageNumber) + 1 >= maximumPageNumber) {
      return
    }

    if (Number(currentPageNumber + 1) === pageNumbers[pageNumbers.length - 1]) {
      setPageNumbers([
        currentPageNumber + 2,
        currentPageNumber + 3,
        currentPageNumber + 4,
        currentPageNumber + 5,
        currentPageNumber + 6,
      ])
    }

    navigate(`/${Number(currentPageNumber + 2)}`)
  }

  const renderPageNumbers = useCallback(() => {
    return (
      <div className='d-flex'>
        {pageNumbers.map((pageNumber) => (
          <Pagination.Item
            key={pageNumber}
            active={Number(pageNumber - 1) === Number(currentPageNumber)}
            onClick={() => navigate(`/${pageNumber}`)}
          >
            {pageNumber}
          </Pagination.Item>
        ))}
      </div>
    )
  }, [currentPageNumber, pageNumbers, navigate])

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          paginateToPrevPage()
        }}
      />
      {renderPageNumbers()}
      <Pagination.Next onClick={() => paginateToNextPage()} />
    </Pagination>
  )
}

export default CustomPagination
