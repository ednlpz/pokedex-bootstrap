const PokemonDetailsSkeletonLoader = () => {
  return (
    <div className='flex flex-col items-center gap-1 rounded-lg'>
      <div className='w-10 h-6 bg-gray-200 rounded-lg animate-pulse' />
      <div className='w-40 h-10 bg-gray-200 rounded-lg animate-pulse' />
      <div className='flex gap-2 mt-1'>
        <div className='w-16 h-8 bg-gray-200 rounded-lg animate-pulse' />
        <div className='w-24 h-8 bg-gray-200 rounded-lg animate-pulse' />
      </div>
    </div>
  )
}

export default PokemonDetailsSkeletonLoader
