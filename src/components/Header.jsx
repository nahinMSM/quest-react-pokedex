import styled from 'styled-components'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <Div>
      <img src={logo} alt="Logo" />
    </Div>
  )
}

export default Header

const Div = styled.div`
    width: 50%;
    margin: 0 auto;

    img { 
      width: 100%;
    }
`