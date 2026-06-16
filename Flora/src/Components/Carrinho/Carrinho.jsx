import "./Carrinho.css";

export default function Carrinho({ imagem, nome, preco }) {
  return (
    <div className="card-produto">

      <img
        src={imagem}
        alt={nome}
        className="produto-img"
      />

      <div className="produto-info">

        <h3>{nome}</h3>

        <p className="preco">
          R$ {preco.toFixed(2)}
        </p>

        <button className="btn-carrinho">
          Adicionar ao carrinho
        </button>

      </div>

    </div>
  );
}