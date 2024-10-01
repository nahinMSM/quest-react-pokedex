import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import PokemonDetail from '../page/PokemonDetail'

const AppRouter =()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter