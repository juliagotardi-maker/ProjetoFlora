import "./main.css";

import Carrossel from "../Carrossel/Carrossel";
import CardCategoria from "../Cards/Card";

import buque from "../../assets/buque.png";
import arranjo from "../../assets/arranjo.png";
import paisagismo from "../../assets/paisagismo.png";
import presente from "../../assets/presentes.png";

export default function Main() {
  return (
    <main>

      {/* CARROSSEL */}
      <Carrossel />

      {/* CATEGORIAS */}
      <section className="categorias">

        <div className="categoria-grid">

          <CardCategoria imagem={buque} titulo="Buquês" />

          <CardCategoria imagem={arranjo} titulo="Arranjos" />

          <CardCategoria imagem={paisagismo} titulo="Paisagismo" />

          <CardCategoria imagem={presente} titulo="Cestas & Presentes" />

        </div>

      </section>

      {/* SOBRE */}
      <section className="sobre">

        <div className="sobre-conteudo">

          <p>SOBRE NÓS</p>

          <h2>Mais que flores, criamos experiências</h2>

          <span>
            Unimos flores, plantas e paisagismo para levar beleza e significado até você.
          </span>

          <button>CONHEÇA NOSSA HISTÓRIA</button>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section className="beneficios">

        <div>📍 Localizada em Lençóis Paulista - São Paulo</div>
        <div>📅 Agendamento flexível</div>
        <div>💳 Parcele em até 6x</div>
        <div>🎁 Embalagem premium</div>

      </section>

    </main>
  );
}