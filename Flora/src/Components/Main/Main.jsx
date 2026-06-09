import "./main.css";

export default function Main() {
  return (
    <main>

      <section className="hero">

        <div className="hero-text">

          <span>TRANSFORME MOMENTOS</span>

          <h1>
            Flores que
            emocionam
          </h1>

          <p>
            Buquês, arranjos e plantas para celebrar,
            presentear e decorar com amor.
          </p>

          <button>COMPRAR AGORA</button>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd"
            alt="Buquê"
          />
        </div>

      </section>

      <section className="categorias">

        <p className="subtitulo">
          ESCOLHA O QUE MAIS COMBINA
        </p>

        <h2>Nossas categorias</h2>

        <div className="categoria-grid">

          <div className="categoria-card">
            <h3>💐 Buquês</h3>
          </div>

          <div className="categoria-card">
            <h3>🌷 Arranjos</h3>
          </div>

          <div className="categoria-card">
            <h3>🪴 Plantas</h3>
          </div>

          <div className="categoria-card">
            <h3>🌳 Paisagismo</h3>
          </div>

          <div className="categoria-card">
            <h3>🎁 Presentes</h3>
          </div>

        </div>

      </section>

      <section className="sobre">

        <div className="sobre-conteudo">

          <p>SOBRE NÓS</p>

          <h2>
            Mais que flores,
            criamos experiências
          </h2>

          <span>
            Unimos flores, plantas e paisagismo
            para levar beleza e significado
            até você.
          </span>

          <button>
            CONHEÇA NOSSA HISTÓRIA
          </button>

        </div>

      </section>

      <section className="beneficios">

        <div>🚚 Entrega para Lençois Paulista e Região</div>
        <div>📅 Agendamento flexível</div>
        <div>💳 Parcele em até 6x</div>
        <div>🎁 Embalagem premium</div>

      </section>

    </main>
  );
}