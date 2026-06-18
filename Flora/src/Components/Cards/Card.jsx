import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card({ produto, onAddToCart }) {
  const navigate = useNavigate();

  if (!produto) return null;

  return (
    <div
      className="card-produto"
      onClick={() => navigate(`/produto/${produto.id_produto}`)}
    >
      <div className="card-imagem">
        <img src={produto.imagem} alt={produto.nome} />
      </div>

      <div className="card-info">
        <h3 className="card-titulo">{produto.nome}</h3>

        <p className="descricao">
          {produto.descricao}
        </p>

        <p className="preco">
          R$ {produto.preco}
        </p>

        <p className="estoque">
          {produto.quantidade > 0
            ? `Em estoque: ${produto.quantidade}`
            : "Sem estoque"}
        </p>

        <button
          className="btn-ver"
          onClick={(e) => {
            e.stopPropagation();

            if (onAddToCart) {
              onAddToCart(produto);
            }

            navigate("/carrinho");
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}