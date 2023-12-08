import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Container from './components/Container.jsx';
import Home from './pages/Home.jsx';
import Historia from './pages/Historia.jsx';
import Personagens from './pages/Personagens.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header/>
          <Routes>
            <Route Component={ Home } exact path="/" />
            <Route Component={ Historia } path="/historia" />
            <Route Component={ Personagens } path="/personagens" />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App