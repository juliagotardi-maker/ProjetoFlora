import "./Arranjos.css";
import { Link } from "react-router-dom";
import Carrinho from "../../Components/Carrinho/Carrinho";

import arranjo1 from "../../assets/arranjo1.png";
import arranjo2 from "../../assets/arranjo2.png";
import arranjo3 from "../../assets/arranjo3.png";
import arranjo4 from "../../assets/arranjo4.png";

export default function Arranjos() {
  return (
    <div className="pagina-arranjos">

      <Link to="/" className="voltar">
        ← Voltar para Home
      </Link>

      <h1>Arranjos 🌷</h1>

      <div className="grid-produtos">

        <Carrinho imagem={arranjo1} nome="Arranjo Elegance" preco={189.90} />
        <Carrinho imagem={arranjo2} nome="Arranjo Tropical" preco={159.90} />
        <Carrinho imagem={arranjo3} nome="Arranjo Clássico" preco={199.90} />
        <Carrinho imagem={arranjo4} nome="Arranjo Premium" preco={249.90} />

      </div>

    </div>
  );
}