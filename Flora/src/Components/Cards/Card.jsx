import { useNavigate } from "react-router-dom";
import "./card.css";

export default function Card({
  id,
  nome,
  preco,
  quantidade,
  descricao,
  imagem
}) {
  const navigate = useNavigate();

  return (
    <div className="card-produto" onClick={() => navigate(`/produto/${id}`)}>

      <img src={imagem} alt={nome} className="produto-img" />

      <div className="info">

        <h3>{nome}</h3>

        <p className="descricao">
          {descricao?.slice(0, 60)}...
        </p>

        <p className="preco">R$ {preco}</p>

        <p className="estoque">
          {quantidade > 0 ? `Em estoque: ${quantidade}` : "Sem estoque"}
        </p>

      </div>

    </div>
  );
}