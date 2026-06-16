import "./paisagismo.css";
import { Link } from "react-router-dom";
import Carrinho from "../../Components/Carrinho/Carrinho";

import jardim1 from "../../assets/jardim1.png";
import jardim2 from "../../assets/jardim2.png";
import jardim3 from "../../assets/jardim3.png";
import jardim4 from "../../assets/jardim4.png";

export default function Paisagismo() {
  return (
    <div className="pagina-paisagismo">

      <Link to="/" className="voltar">
        ← Voltar para Home
      </Link>

      <h1>Paisagismo 🌿</h1>

      <div className="grid-produtos">

        <Carrinho imagem={jardim1} nome="Pedras Decorativas" preco={39.90} />
        <Carrinho imagem={jardim2} nome="Seixos Naturais" preco={49.90} />
        <Carrinho imagem={jardim3} nome="Casca de Pinus" preco={29.90} />
        <Carrinho imagem={jardim4} nome="Kit Jardim Zen" preco={89.90} />

      </div>

    </div>
  );
}