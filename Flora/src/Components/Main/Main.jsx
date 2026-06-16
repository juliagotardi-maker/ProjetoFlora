import "./main.css";
import { Link } from "react-router-dom";
import Carrossel from "../Carrossel/Carrossel";
import CardCategoria from "../Cards/Card";

import buque from "../../assets/buque.png";
import arranjo from "../../assets/arranjo.jpg";
import planta from "../../assets/planta.jpg";
import paisagismo from "../../assets/paisagismo.jpg";
import presente from "../../assets/presente.jpg";
import { useState } from "react";


export default function Main() {

  return (
    <main>

      <Carrossel />
       
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

        <section className="mais-vendidos">

        <h2>Mais Vendidos</h2>

        <div className="produtos-grid">

          <CardCategoria
            imagem={buque}
            titulo="Buquê Encanto"
          />

          <CardCategoria
            imagem={arranjo}
            titulo="Arranjo Tropical"
          />

          <CardCategoria
            imagem={presente}
            titulo="Cesta Especial"
          />

        </div>

        </section>
        
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

      </section>

    </main>
  );
}