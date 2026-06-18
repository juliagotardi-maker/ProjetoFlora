import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import ChatBot from "./Components/ChatBot/ChatBot";
import Carrinho from "./Pages/Carrinho/Carrinho";
import Pagamento from "./Pages/Pagamento/Pagamento";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ChatBot/>
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
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento />} />
   

      </Routes>
    </BrowserRouter>
  );
}

export default App;