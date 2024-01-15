import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import ClassicRock from "./pages/ClassicRock";
import HeavyMetal from "./pages/HeavyMetal";
import Pagina404 from "./pages/Pagina404";
import Conteudo from "./components/Conteudo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Conteudo>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/classic-rock" Component={ClassicRock} />
            <Route path="/heavy-metal" Component={HeavyMetal} />
            <Route path="*" Component={Pagina404} />
          </Routes>
        </Conteudo>
      </BrowserRouter>
    </>
  );
}

export default App;
