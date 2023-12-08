import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import Home from './pages/Home.jsx';
import Historia from './pages/Historia.jsx';
import Personagens from './pages/Personagens.jsx';

function App() {
  return (
    <>
      <Container>
        <Header/>
        <Home/>
        <Historia/>
        <Personagens/>
      </Container>
    </>
  )

}

export default App