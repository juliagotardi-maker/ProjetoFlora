import "./main.css";

export default function Main() {
  return (
    <main>

      <section className="banner">

        <div className="banner-texto">
          <p>FLORICULTURA & PAISAGISMO</p>

          <h1>
            Flores que transformam momentos
          </h1>

          <span>
            Buquês, arranjos e presentes especiais
            para quem você ama.
          </span>

          <button>Comprar Agora</button>
        </div>

        <div className="banner-imagem">
          <img
            src="https://images.unsplash.com/photo-1520763185298-1b434c919102"
            alt="Buquê"
          />
        </div>

      </section>

      <section className="categorias">

        <h2>Nossas Categorias</h2>

        <div className="cards">

          <div className="card">
            <h3>💐 Buquês</h3>
          </div>

          <div className="card">
            <h3>🪴 Plantas</h3>
          </div>

          <div className="card">
            <h3>🏺 Vasos</h3>
          </div>

          <div className="card">
            <h3>🎁 Presentes</h3>
          </div>

        </div>

      </section>

      <section className="produtos">

        <h2>Mais Vendidos</h2>

        <div className="produtos-grid">

          <div className="produto-card">
            <h3>Buquê Rosé</h3>
            <p>R$ 189,90</p>
            <button>Adicionar ao Carrinho</button>
          </div>

          <div className="produto-card">
            <h3>Lírios Elegance</h3>
            <p>R$ 149,90</p>
            <button>Adicionar ao Carrinho</button>
          </div>

          <div className="produto-card">
            <h3>Orquídea Premium</h3>
            <p>R$ 129,90</p>
            <button>Adicionar ao Carrinho</button>
          </div>

        </div>

      </section>

    </main>
  );
}