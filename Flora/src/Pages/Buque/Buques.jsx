import "./buques.css";
import "../../Components/Header/header.css";
import { Link } from "react-router-dom";
import Carrinho from "../../Components/Carrinho/Carrinho";

import buque1 from "../../assets/buque1.png";
import buque2 from "../../assets/buque2.png";
import buque3 from "../../assets/buque3.png";
import buque4 from "../../assets/buque4.png";
import buque5 from "../../assets/buque5.png";
import buque6 from "../../assets/buque6.png";
import buque7 from "../../assets/buque7.png";

export default function Buques() {
  return (
    <div className="pagina-buques">

      <Link to="/" className="voltar">
        ← Voltar para Home
      </Link>

      <h1>Buquês 🌸</h1>

      <div className="grid-produtos">

        <Carrinho imagem={buque1} nome="Buquê Rita" preco={189.90} />
        <Carrinho imagem={buque2} nome="Buquê Terezinha" preco={159.90} />
        <Carrinho imagem={buque3} nome="Buquê Maria" preco={229.90} />
        <Carrinho imagem={buque4} nome="Buquê José" preco={199.90} />
        <Carrinho imagem={buque5} nome="Buquê Clarice" preco={189.90} />
        <Carrinho imagem={buque6} nome="Buquê Cecília" preco={159.90} />
        <Carrinho imagem={buque7} nome="Buquê Rosana" preco={229.90} />

      </div>

    </div>
  );
}