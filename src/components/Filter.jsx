import React from 'react'
import styled from 'styled-components'

const FilterType = ({selectedType, onTypeChange}) => {

  return (
    <Filter>
        <label htmlFor="type-select">Filtrar por Tipos: </label>
        <select id="type-select" value={selectedType} onChange={onTypeChange}>
          <option value="">Pokémon</option>
          <option value="fire">Fogo</option>
          <option value="water">Água</option>
          <option value="grass">Grama</option>
          <option value="electric">Elétrico</option>
          <option value="psychic">Psíquico</option>
        </select>
      </Filter>
  )
}

export default FilterType

const Filter = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;

  select {
    padding: 5px;
    font-size: 16px;
  }
`;