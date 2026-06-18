// ChatBot.jsx

import "./ChatBot.css";

export default function ChatBot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Olá! Como posso ajudar você hoje?"
    }
  ]);

  const [input, setInput] = useState("");

  async function sendMessage() {

    if (!input) return;

    const userMessage = {
      role: "user",
      content: input
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    try {

      const response = await fetch(
        "http://localhost:5002/Chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: input
          })
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply
        }
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Erro ao conectar com a IA 😭"
        }
      ]);

    }
  }

  return (
    <>


      <div
        className="chat-button"
        onClick={() => setOpen(!open)}
      >
        💬
      </div>



      {
        open && (

          <div className="chat-box">

            <div className="chat-header">
              Flora Assistant 🌷
            </div>

            <div className="chat-messages">

              {
                messages.map((msg, index) => (

                  <div
                    key={index}
                    className={
                      msg.role === "user"
                        ? "user-message"
                        : "bot-message"
                    }
                  >
                    {msg.content}
                  </div>

                ))
              }

            </div>

            <div className="chat-input">

              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button onClick={sendMessage}>
                Enviar
              </button>

            </div>

          </div>

        )
      }
    </>
  );
}