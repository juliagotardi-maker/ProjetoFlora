import "./main.css";

import { Link } from "react-router-dom";
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

          <Link to="/buques" className="link-categoria">
            <CardCategoria
              imagem={buque}
              titulo="Buquês"
            />
          </Link>

          <Link to="/arranjos" className="link-categoria">
            <CardCategoria
              imagem={arranjo}
              titulo="Arranjos"
            />
          </Link>

          <Link to="/paisagismo" className="link-categoria">
            <CardCategoria
              imagem={paisagismo}
              titulo="Paisagismo"
            />
          </Link>

          <Link to="/presentes" className="link-categoria">
            <CardCategoria
              imagem={presente}
              titulo="Cestas & Presentes"
            />
          </Link>


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

      </section>

    </main>
  );
}