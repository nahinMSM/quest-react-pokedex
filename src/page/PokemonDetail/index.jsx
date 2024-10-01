import React from 'react'
import usePokemon from '../../hooks/usePokemon'
import { useParams } from 'react-router-dom'
import { ButtonToBack } from '../../components/ButtonBack'
import { DetailContainer, Section, Image } from './style'

function PokemonDetail() {
  const { id } = useParams()
  const { pokemon, loading, error } = usePokemon(id)

  if (loading) return <div>Loading...</div>
  if (error) return <p>{error}</p>

  return (
      <DetailContainer>
        <ButtonToBack />
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Section>
          <h2>{pokemon.name}</h2>
          <div>
            <ul>
              <h3>Movimentos</h3>
              {pokemon.moves.slice(0, 5).map((move, index) => (
                <li key={index}>{move.move.name}</li>
              ))}
            </ul>
            <ul>
              <h3>Habilidades</h3>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
            <ul>
              <h3>Tipo</h3>
              {pokemon.types.map((type, index) => (
                <li key={index}>{type.type.name}</li>
              ))}
            </ul>
          </div>
        </Section>
      </DetailContainer>
  )
}

export default PokemonDetail