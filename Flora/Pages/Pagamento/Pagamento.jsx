import "./pagamento.css";

export default function Pagamento() {

  function finalizarPedido() {
    const telefone = "5514996511912";

    const mensagem =
      "🌷 Olá! Gostaria de finalizar meu pedido.";

    window.open(
      `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  }

  return (
    <main className="pagamento-page">

      <h1>Pagamento</h1>

      <input
        type="text"
        placeholder="Nome completo"
      />

      <input
        type="text"
        placeholder="Telefone"
      />

      <input
        type="text"
        placeholder="Hora da da retirada"
      />

      <select>
        <option>PIX</option>
        <option>Cartão de Crédito</option>
        <option>Cartão de Débito</option>
      </select>

      <button onClick={finalizarPedido}>
        Finalizar Pedido
      </button>

    </main>
  );
}