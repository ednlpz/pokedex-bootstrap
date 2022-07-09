const PokemonType = ({ types }) => {
  const pokemonTypesList = [
    { typeName: 'fire', element: <FireType /> },
    { typeName: 'water', element: <WaterType /> },
    { typeName: 'grass', element: <GrassType /> },
    { typeName: 'bug', element: <BugType /> },
    { typeName: 'flying', element: <FlyingType /> },
    { typeName: 'normal', element: <NormalType /> },
    { typeName: 'fighting', element: <FightingType /> },
    { typeName: 'poison', element: <PoisonType /> },
    { typeName: 'electric', element: <ElectricType /> },
    { typeName: 'ground', element: <GroundType /> },
    { typeName: 'psychic', element: <PsychicType /> },
    { typeName: 'rock', element: <RockType /> },
    { typeName: 'ice', element: <IceType /> },
    { typeName: 'dragon', element: <DragonType /> },
    { typeName: 'ghost', element: <GhostType /> },
    { typeName: 'dark', element: <DarkType /> },
    { typeName: 'steel', element: <SteelType /> },
    { typeName: 'fairy', element: <FairyType /> },
    { typeName: 'unknown', element: <UnknownType /> },
  ]

  const renderPokemonType = () => {
    return pokemonTypesList.find(
      (type) => type.typeName === types.type.name.toLowerCase()
    ).element
  }
  return <>{renderPokemonType()}</>
}

const FireType = () => (
  <div className={'pokemonType  pokemonType-fire'}>
    Fire
  </div>
)

const NormalType = () => (
  <div className={'pokemonType  pokemonType-normal'}>
    Normal
  </div>
)

const FightingType = () => (
  <div className={'pokemonType  pokemonType-fighting'}>Fighting</div>
)

const WaterType = () => (
  <div className={'pokemonType  pokemonType-water'}>Water</div>
)

const GrassType = () => (
  <div className={'pokemonType  pokemonType-grass'}>
    Grass
  </div>
)

const FlyingType = () => (
  <div className={'pokemonType  pokemonType-flying'}>
    Flying
  </div>
)

const BugType = () => (
  <div className={'pokemonType  pokemonType-bug'}>Bug</div>
)

const PoisonType = () => (
  <div className={'pokemonType  pokemonType-poison'}>
    Poison
  </div>
)

const ElectricType = () => (
  <div className={'pokemonType  pokemonType-electric'}>
    Electric
  </div>
)

const GroundType = () => (
  <div className={'pokemonType  pokemonType-ground'}>
    Ground
  </div>
)

const RockType = () => (
  <div className={'pokemonType  pokemonType-rock'}>
    Rock
  </div>
)

const GhostType = () => (
  <div className={'pokemonType  pokemonType-ghost'}>
    Ghost
  </div>
)

const SteelType = () => (
  <div className={'pokemonType  pokemonType-steel'}>
    Steel
  </div>
)

const PsychicType = () => (
  <div className={'pokemonType  pokemonType-psychic'}>Psychic</div>
)

const IceType = () => (
  <div className={'pokemonType  pokemonType-ice'}>Ice</div>
)

const DragonType = () => (
  <div className={'pokemonType  pokemonType-dragon'}>
    Dragon
  </div>
)

const DarkType = () => (
  <div className={'pokemonType  pokemonType-dark'}>
    Dark
  </div>
)

const FairyType = () => (
  <div className={'pokemonType  pokemonType-fairy'}>Fairy</div>
)

const UnknownType = () => (
  <div className={'pokemonType  pokemonType-unknown'}>Unknown</div>
)

export default PokemonType
