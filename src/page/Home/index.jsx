import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Container, MoreButton } from './style'
import { ButtonToReload } from '../../components/ButtonBack'
import FilterType from '../../components/Filter'
import usePokemon from '../../hooks/usePokemon'

function Home() {
  const [offset, setOffset] = useState(0)
  const [selectedType, setSelectedType] = useState("") 
  const { pokemons, loading, error } = usePokemon(null, offset, selectedType)

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value)
  }

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <Container>
      <ButtonToReload />
      <h1>Pokémon List</h1>

      <FilterType 
        selectedType={selectedType}
        onTypeChange={handleTypeChange}
      />

      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <MoreButton onClick={() => setOffset(offset + 10)}>
        Carregar mais
      </MoreButton>
    </Container>
  )
}

export default Home