import "./Carrinho.css";

export default function Carrinho({ imagem, nome, preco }) {
  return (
    <div className="card-produto">
      <img src={imagem} alt={nome} />

      <div className="card-info">
        <h3>{nome}</h3>

        <h4>R$ {preco}</h4>

        <p>3x de R$ {(preco / 3).toFixed(2)}</p>

        <button>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}