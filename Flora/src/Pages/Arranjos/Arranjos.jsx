import "./arranjos.css";
import { Link } from "react-router-dom";
import Carrinho from "../../Components/Carrinho/Carrinho";

import arranjo1 from "../../assets/arranjo1.png";
import arranjo2 from "../../assets/arranjo2.png";
import arranjo3 from "../../assets/arranjo3.png";
import arranjo4 from "../../assets/arranjo4.png";
import arranjo5 from "../../assets/arranjo5.png";
import arranjo6 from "../../assets/arranjo6.png";
import arranjo7 from "../../assets/arranjo7.png";
import arranjo8 from "../../assets/arranjo8.png";

export default function Arranjos() {
  return (
    <div className="pagina-arranjos">

      <Link to="/" className="voltar">
        ← Voltar para Home
      </Link>

      <h1>Arranjos 🌷</h1>

      <div className="grid-produtos">

        <Carrinho imagem={arranjo1} nome="Arranjo Rosângela" preco={189.90} />
        <Carrinho imagem={arranjo2} nome="Arranjo Ana" preco={159.90} />
        <Carrinho imagem={arranjo3} nome="Arranjo Maria Antônia" preco={199.90} />
        <Carrinho imagem={arranjo4} nome="Arranjo Ângela" preco={249.90} />
        <Carrinho imagem={arranjo5} nome="Arranjo Helena" preco={189.90} />
        <Carrinho imagem={arranjo6} nome="Arranjo Isabel" preco={159.90} />
        <Carrinho imagem={arranjo7} nome="Arranjo Luzia" preco={199.90} />
        <Carrinho imagem={arranjo8} nome="Arranjo Elza" preco={249.90} />

      </div>

    </div>
  );
}