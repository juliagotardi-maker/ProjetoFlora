import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ChatBot from "./Components/Chatbot/ChatBot";

import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";

import Carrinho from "./Pages/Carrinho/Carrinho";
import Pagamento from "./Pages/Pagamento/Pagamento";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ChatBot />
    </>
  );
}

function LoginPage() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

function CadastroPage() {
  return (
    <>
      <Header />
      <Cadastro />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;