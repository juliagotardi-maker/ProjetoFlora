import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";

import Pagamento from "./Pages/Pagamento/Pagamento";
import Carrinho from "./Pages/Carrinho/Carrinho";

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
        <Route path="/presentes" element={<Presentes />} />
        <Route path="/minhas-compras" element={<Minhas_Compras />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;