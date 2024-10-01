import { useEffect, useState } from 'react'
import fetchAxios from '../service/axios'

function usePokemon(id, offset, type) {
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id) {
      fetchPokemonById(id)
    } else if (type) {
      fetchPokemonsByType(type)
    } else {
      fetchPokemons(offset)
    }
  }, [id, offset, type])

  const fetchPokemons = async () => {
    setLoading(true)
    try {
      const response = await fetchAxios.get(`pokemon?limit=10&offset=${offset}`)
      const pokemonResults = response.data.results

      const detailedPokemons = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          const details = await fetchAxios.get(pokemon.url)
          return details.data
        })
      )

      setPokemons([...pokemons, ...detailedPokemons])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError("Erro ao carregar os dados.")
    }
  }

  const fetchPokemonsByType = async (type) => {
    setLoading(true)
    try {
      const response = await fetchAxios.get(`type/${type}`)
      const pokemonResults = response.data.pokemon.map((p) => p.pokemon)

      const detailedPokemons = await Promise.all(
        pokemonResults.map(async (pokemon) => {
          const details = await fetchAxios.get(pokemon.url)
          return details.data
        })
      )

      setPokemons(detailedPokemons)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError("Erro ao carregar os dados.")
    }
  }

  const fetchPokemonById = async (id) => {
    setLoading(true)
    try {
      const response = await fetchAxios.get(`pokemon/${id}`)
      setPokemon(response.data)
      setLoading(false)
    } catch (error) {
      setError("Erro ao carregar os detalhes do pokémon.")
      setLoading(false)
    }
  }

  return { pokemons, pokemon, loading, error }
}

export default usePokemon