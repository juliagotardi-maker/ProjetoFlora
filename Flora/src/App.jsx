import { Routes, Route } from "react-router-dom";

import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";
import Carrinho from "./Components/Carrinho/Carrinho";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;