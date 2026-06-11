import "./main.css";
import Carrossel from "../Carrossel/Carrossel";
import Card from "../Cards/Card";
import axios from "axios";
import { useEffect, useState } from "react";

import buque from "../../assets/buque.png";
import arranjo from "../../assets/arranjo.jpg";
import planta from "../../assets/planta.jpg";
import paisagismo from "../../assets/paisagismo.jpg";
import presente from "../../assets/presente.jpg";

export default function Main() {
  const [produtos, setProdutos] = useState([]);

  const imagens = {
    1: buque,
    2: arranjo,
    3: planta,
    4: paisagismo,
    5: presente,
    101: buque,
    102: arranjo,
    103: presente
  };

  useEffect(() => {
    axios.get("http://localhost:5024/api/produtos")
      .then(res => setProdutos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <main>

      <Carrossel />

      <section className="produtos-grid">

        {produtos.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            nome={p.nome}
            preco={p.preco}
            quantidade={p.quantidade}
            descricao={p.descricao}
            imagem={imagens[p.id]}
          />
        ))}

      </section>

    </main>
  );
}