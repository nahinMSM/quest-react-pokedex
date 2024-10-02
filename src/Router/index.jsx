import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import PokemonDetail from '../page/PokemonDetail'

const AppRouter =()=> {
  return (
    <Router basename="/quest-react-pokedex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  )
}

export default AppRouter