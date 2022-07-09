import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pokemons from './pages/Pokemons/Pokemons'
import 'bootstrap/dist/css/bootstrap.min.css'
import PokemonProfile from './pages/PokemonProfile/PokemonProfile'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path={'/:currentPageNumber'} element={<Pokemons />} />
        <Route path='/pokemon/:id' element={<PokemonProfile />} />
        <Route path='*' element={<PokemonProfile />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
