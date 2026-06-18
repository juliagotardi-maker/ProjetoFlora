import { useNavigate } from "react-router-dom";

export default function Pagamento() {

  const navigate = useNavigate();

  function finalizarCompra() {

    const mensagem =
      "Olá! Gostaria de finalizar meu pedido na Flora.";

    window.open(
      `https://wa.me/5514996511912?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  }

  return (
    <div className="pagamento">

      <h1>Pagamento</h1>

      <input
        type="text"
        placeholder="Nome"
      />

      <input
        type="text"
        placeholder="Telefone"
      />

      <button onClick={finalizarCompra}>
        Enviar Pedido
      </button>

    </div>
  );
}