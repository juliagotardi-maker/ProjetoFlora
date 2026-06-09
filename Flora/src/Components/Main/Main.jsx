import "./main.css";
import buque from "../../assets/buque.png";
import arranjo from "../../assets/arranjo.jpg";
import planta from "../../assets/planta.jpg";
import paisagismo from "../../assets/paisagismo.jpg";
import presente from "../../assets/presente.jpg";
import CardCategoria from "../Cards/Card";
import { useState, useEffect } from "react";
import banner1 from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";


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
          src={banner}
          alt="Buquê"
        />
        </div>

      </section>

      <section className="categorias">

        <div className="categoria-grid">

        <CardCategoria
          imagem={buque}
          titulo="Buquês"
        />

        <CardCategoria
          imagem={arranjo}
          titulo="Arranjos"
        />

        <CardCategoria
          imagem={planta}
          titulo="Plantas"
        />

        <CardCategoria
          imagem={paisagismo}
          titulo="Paisagismo"
        />

        <CardCategoria
          imagem={presente}
          titulo="Presentes"
        />

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