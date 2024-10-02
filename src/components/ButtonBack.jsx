import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import  PokeBall  from '../assets/poke-ball.png'

export const ButtonToBack = () => {
  const navigate = useNavigate()
  return (
    <ButtonBack onClick={() => navigate('/')}>
      <img src={PokeBall} alt='To Back' />
    </ButtonBack>
  )
}

export const ButtonToReload = () => {
  return (
    <ButtonLoad onClick={() => window.location.reload()}>
      <img src={PokeBall} alt='To Back' />
    </ButtonLoad>
  )
}

const ButtonBack = styled.button`
  position: absolute;
  margin: 5px;
  top: 0;
  left: 0;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 45px;
    border-radius: 50%;
    }
    &:hover {
    transform: scale(1.05);
  }
  transition: 0.3s ease;
`

const ButtonLoad = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 50px;
    border-radius: 50%;
    }
    &:hover {
    transform: scale(1.05);
  }
  transition: 0.3s ease;
`