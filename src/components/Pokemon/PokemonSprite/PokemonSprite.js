import { useRef } from 'react'

const PokemonSprite = ({ sprite, name }) => {
  const spriteRef = useRef(null)

  return (
    <figure className='d-flex justify-content-center w-100'>
      {/* API returns null as a string  */}
      <img
        alt={name}
        ref={spriteRef}
        src={sprite !== 'null' ? sprite : `/placeholder.png`}
        className='w-100 h-auto saturate-150'
      />
    </figure>
  )
}

export default PokemonSprite













// onLoad={() => {
//   skeletonSpriteLoaderRef.current.classList.add('visually-hidden')
//   spriteRef.current.classList.remove('visually-hidden')
// }}
// const skeletonSpriteLoaderRef = useRef(null)

  /* <div
        ref={skeletonSpriteLoaderRef}
        className='d-flex align-self-center justify-content-center p-4'
      >
        <div className='w-100 bg-secondary rounded-3 animate-pulse' />
      </div> */
