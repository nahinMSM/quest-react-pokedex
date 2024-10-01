import ButtonThemeContext from "./components/ButtonThemeContext"
import Header from "./components/Header"
import AppRouter from "./Router"
import GlobalStyle from "./styles/GlobalStyle"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ButtonThemeContext />
      <AppRouter />
    </>
  )
}

export default App