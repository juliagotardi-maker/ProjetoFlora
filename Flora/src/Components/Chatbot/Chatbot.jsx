  import { useState } from "react";
  import "./chatbot.css";
  import logo from "../../assets/logo.png";
  export default function ChatBot() {
    const [aberto, setAberto] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [mensagens, setMensagens] = useState([
      {
        autor: "bot",
        texto: " Olá! Eu sou Lua, assistente da Flora Floricultura e Paisagismo, Como posso ajudar você?"
      }
    ]);
    function responder(texto) {
      texto = texto.toLowerCase();
      if (texto.includes("buquê"))
        return "🌷 Temos diversos buquês, incluindo: Liríos, Flores silvestres, Rosas, Tulipas, Copo de leite, Margarida, Girassol...";
      if (texto.includes("planta"))
        return "🌿 Trabalhamos com plantas ornamentais e de interior, além de acessórios para seu jardim.";
      if (texto.includes("presente"))
        return "🎁 Temos cestas, flores e presentes personalizados a gosto do cliente.";
      if (texto.includes("horário"))
        return "🕒 Funcionamos de segunda a sábado das 8h às 18h.";
      if (texto.includes("retirada"))
        return "📍 Todos os pedidos são retirados em nossa loja de Lençóis Paulista, Rua dos Bobos,n° 0 - Bairro da Alegria";
      return "🌸 Posso ajudar com buquês, plantas, presentes, horário retirada e pagamento.";
    }
    function enviarMensagem(texto = mensagem) {
      if (!texto.trim()) return;
      setMensagens((prev) => [
        ...prev,
        {
          autor: "user",
          texto
        }
      ]);
      setMensagem("");
      setTimeout(() => {
        setMensagens((prev) => [
          ...prev,
          {
            autor: "bot",
            texto: responder(texto)
          }
        ]);
      }, 600);
    }
    return (
      <>
        <button
          className="chat-btn"
          onClick={() => setAberto(!aberto)}
        >
          🗯️
        </button>
        {aberto && (
          <div className="chat-container">
            <div className="chat-header">
              <img src={logo} alt="Flora" />
              <div>
                <h3>Assistente Flora </h3>
                <span>Online agora</span>
              </div>
            </div>
            <div className="chat-body">
              {mensagens.map((msg, index) => (
                <div
                  key={index}
                  className={
                    msg.autor === "bot"
                      ? "bot-message"
                      : "user-message"
                  }
                >
                  {msg.texto}
                </div>
              ))}
            </div>
            <div className="opcoes-rapidas">
              <button
                onClick={() => enviarMensagem("Buquê")}
              >
                🌷 Buquês
              </button>
              <button
                onClick={() => enviarMensagem("Planta")}
              >
                🌿 Plantas
              </button>
              <button
                onClick={() => enviarMensagem("Presente")}
              >
                🎁 Presentes
              </button>
              <button
                onClick={() => enviarMensagem("Horário")}
              >
                🕒 Horário
              </button>
              <button
                onClick={() => enviarMensagem("Retirada")}
              >
                📍 Retirada
              </button>
            </div>
            <div className="chat-footer">
              <input
                type="text"
                placeholder="Digite sua dúvida..."
                value={mensagem}
                onChange={(e) =>
                  setMensagem(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    enviarMensagem();
                  }
                }}
              />
              <button
                className="btn-enviar"
                onClick={() => enviarMensagem()}
              >
                ➤
              </button>
            </div>
            <a
              href="https://wa.me/5514996511912"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              📱 Outras dúvidas
            </a>
          </div>
        )}
      </>
    );
  }
