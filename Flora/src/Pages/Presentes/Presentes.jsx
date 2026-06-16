import "./Presentes.css";
import { Link } from "react-router-dom";
import Carrinho from "../../Components/Carrinho/Carrinho";

import presente1 from "../../assets/presente1.png";
import presente2 from "../../assets/presente2.png";
import presente3 from "../../assets/presente3.png";
import presente4 from "../../assets/presente4.png";

export default function Presentes() {

  const produtos = [
    { nome: "Cesta Romântica", preco: 149.90, imagem: presente1 },
    { nome: "Kit Especial", preco: 189.90, imagem: presente2 },
    { nome: "Cesta Premium", preco: 249.90, imagem: presente3 },
    { nome: "Cesta Tpm", preco: 199.90, imagem: presente4 },
  ];

  return (
    <div className="pagina-presentes">

      <Link to="/" className="voltar">
        ← Voltar para Home
      </Link>

      <h1>Cestas & Presentes 🎁</h1>

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