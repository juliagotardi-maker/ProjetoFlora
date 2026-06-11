import "./main.css";
import Carrossel from "../Carrossel/Carrossel";
import Card from "../Cards/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Main() {
  const [produtos, setProdutos] = useState([]);

useEffect(() => {
  axios.get("http://localhost:5024/api/Produto")
    .then(res => {
      console.log("PRODUTOS API:", res.data);
      setProdutos(res.data);
    })
    .catch(err => console.log("ERRO:", err));
}, []);

  return (
    <main>

      <Carrossel />

      <section className="produtos-grid">

        {produtos.length === 0 && (
          <p>Carregando produtos...</p>
        )}

        {produtos.map((p) => (
          <Card
            key={p.id_produto}
            produto={p}
          />
        ))}

      </section>

    </main>
  );
}