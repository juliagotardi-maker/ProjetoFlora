import "./presentes.css";
import { Link } from "react-router-dom";
import Carrinho from "../../Components/Carrinho/Carrinho";

import presente1 from "../../assets/presente1.png";
import presente2 from "../../assets/presente2.png";
import presente3 from "../../assets/presente3.png";
import presente4 from "../../assets/presente4.png";
import presente5 from "../../assets/presente5.png";
import presente6 from "../../assets/presente6.png";
import presente7 from "../../assets/presente7.png";
import presente8 from "../../assets/presente8.png";

export default function Presentes() {
  return (
    <div className="pagina-presentes">

      <Link to="/" className="voltar">
        ← Voltar para Home
      </Link>

      <h1>Cestas & Presentes 🎁</h1>

      <div className="grid-produtos">

        <Carrinho imagem={presente1} nome="Cesta Romântica" preco={149.90} />
        <Carrinho imagem={presente2} nome="Box Chocolate" preco={119.90} />
        <Carrinho imagem={presente3} nome="Cesta Premium" preco={229.90} />
        <Carrinho imagem={presente4} nome="Kit Surpresa" preco={189.90} />
        <Carrinho imagem={presente5} nome="Cesta Romântica" preco={129.90} />
        <Carrinho imagem={presente6} nome="Box Chocolate" preco={219.90} />
        <Carrinho imagem={presente7} nome="Cesta Premium" preco={329.90} />
        <Carrinho imagem={presente8} nome="Kit Surpresa" preco={109.90} />
      </div>

    </div>
  );
}