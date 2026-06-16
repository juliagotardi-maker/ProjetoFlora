import "./Paisagismo.css";
import { Link } from "react-router-dom";
import Carrinho from "../../Components/Carrinho/Carrinho";

import jardim1 from "../../assets/jardim1.png";
import jardim2 from "../../assets/jardim2.png";
import jardim3 from "../../assets/jardim3.png";
import jardim4 from "../../assets/jardim4.png";

export default function Paisagismo() {

  const produtos = [
    { nome: "Projeto Residencial", preco: 899.90, imagem: jardim1 },
    { nome: "Jardim Vertical", preco: 1299.90, imagem: jardim2 },
    { nome: "Paisagismo Completo", preco: 2499.90, imagem: jardim3 },
    { nome: "Área Gourmet Verde", preco: 1599.90, imagem: jardim4 },
  ];

  return (
    <div className="pagina-paisagismo">

      <Link to="/" className="voltar">
        ← Voltar para Home
      </Link>

      <h1>Paisagismo 🌿</h1>

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