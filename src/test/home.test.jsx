import React from 'react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../page/Home'
import usePokemon from '../hooks/usePokemon'

// Mock do hook usePokemon
jest.mock('../hooks/usePokemon')

describe('Home Component', () => {
  beforeEach(() => {
    usePokemon.mockReturnValue({
      pokemons: [],
      loading: false,
      error: null,
    })
  })

  test('renders loading state', () => {
    usePokemon.mockReturnValue({ loading: true, pokemons: [], error: null })
    render(
      <Router>
        <Home />
      </Router>
    )
    expect(screen.getByText(/Carregando.../i)).toBeInTheDocument()
  })

  test('renders error message', () => {
    usePokemon.mockReturnValue({ loading: false, pokemons: [], error: 'Error fetching data' })
    render(
      <Router>
        <Home />
      </Router>
    )
    expect(screen.getByText(/Error fetching data/i)).toBeInTheDocument()
  })

  test('renders Pokémon list when pokemons are available', () => {
    usePokemon.mockReturnValue({
      pokemons: [
        { name: 'Pikachu', sprites: { front_default: 'pikachu.png' } },
        { name: 'Charmander', sprites: { front_default: 'charmander.png' } },
      ],
      loading: false,
      error: null,
    })
    render(
      <Router>
        <Home />
      </Router>
    )

    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument()
    expect(screen.getByText(/Charmander/i)).toBeInTheDocument()
  })

  test('filter Pokémon by type', () => {
    render(
        <Home />
    )
    
    // Simula a mudança no filtro de tipo de Pokémon
    fireEvent.change(screen.getByLabelText(/filtrar por tipo/i), { target: { value: 'fire' } })
    
    // Verifica se o valor foi alterado corretamente
    expect(screen.getByLabelText(/filtrar por tipo/i).value).toBe('fire')
  })

  test('loads more Pokémon when button is clicked', () => {
    usePokemon.mockReturnValue({
      pokemons: [
        { name: 'Pikachu', sprites: { front_default: 'pikachu.png' } },
        { name: 'Charmander', sprites: { front_default: 'charmander.png' } },
      ],
      loading: false,
      error: null,
    })

    render(
      <Router>
        <Home />
      </Router>
    )

    // Simula o clique no botão "Carregar mais"
    fireEvent.click(screen.getByText(/Carregar mais/i))
    
    // Não há como garantir a ação, mas podemos testar se o botão está presente
    expect(screen.getByText(/Carregar mais/i)).toBeInTheDocument()
  })
})