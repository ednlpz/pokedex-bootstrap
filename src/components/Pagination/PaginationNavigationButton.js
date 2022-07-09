import { ChevronRight, ChevronLeft } from '../Icons/Icons'

export const NextPageButton = ({ onClick }) => (
  <button onClick={onClick} className='d-flex items-center justify-center px-1 text-red-500 fill-current'>
    <ChevronRight className='w-6 h-6' />
  </button>
)

export const PreviousPageButton = ({ onClick }) => (
  <button onClick={onClick} style={{width: '2rem'}} className='d-flex'>
    <ChevronLeft className='w-100' />
  </button>
)
