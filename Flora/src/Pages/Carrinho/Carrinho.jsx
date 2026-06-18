import "./carrinho.css";

export default function Carrinho() {
  return (
    <main className="carrinho-page">

      <h1>Meu Carrinho</h1>

      <div className="produto">
        <h3>Buquê Rosa Premium</h3>
        <p>Quantidade: 1</p>
        <span>R$ 149,90</span>
      </div>

      <div className="total">
        <h2>Total: R$ 149,90</h2>
      </div>

      <a href="/pagamento">
        <button>
          Continuar Compra
        </button>
      </a>

    </main>
  );
}