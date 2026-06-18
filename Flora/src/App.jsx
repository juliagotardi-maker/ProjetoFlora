import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";

import Buques from "./Pages/Buque/Buques";
import Arranjos from "./Pages/Arranjos/Arranjos";
import Paisagismo from "./Pages/Paisagismo/Paisagismo";
import Presentes from "./Pages/Presentes/Presentes";
import Carrinho from "./Components/Carrinho/Carrinho";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Main" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/buques" element={<Buques />} />
        <Route path="/arranjos" element={<Arranjos />} />
        <Route path="/paisagismo" element={<Paisagismo />} />
        <Route path="/presentes" element={<Presentes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;