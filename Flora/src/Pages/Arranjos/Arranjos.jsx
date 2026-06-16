import "./Arranjos.css";
import { Link } from "react-router-dom";
import Carrinho from "../../Components/Carrinho/Carrinho";

import arranjo1 from "../../assets/arranjo1.png";
import arranjo2 from "../../assets/arranjo2.png";
import arranjo3 from "../../assets/arranjo3.png";
import arranjo4 from "../../assets/arranjo4.png";

export default function Arranjos() {

  const produtos = [
    { nome: "Arranjo Elegance", preco: 189.90, imagem: arranjo1 },
    { nome: "Arranjo Clássico", preco: 159.90, imagem: arranjo2 },
    { nome: "Arranjo Premium", preco: 219.90, imagem: arranjo3 },
    { nome: "Arranjo Delicado", preco: 179.90, imagem: arranjo4 },
  ];

  return (
    <div className="pagina-arranjos">

      <Link to="/" className="voltar">
        ← Voltar para Home
      </Link>

      <h1>Arranjos 🌷</h1>

      <div className="grid-produtos">
        {produtos.map((produto, index) => (
          <Carrinho
            key={index}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </div>

    </div>
  );
}