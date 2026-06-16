import "./main.css";
import Carrossel from "../Carrossel/Carrossel";
import Card from "../Cards/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Main() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/Produto")
      .then((res) => {
        setProdutos(res.data);
      })
      .catch((err) => console.log("ERRO:", err));
  }, []);

  return (
    <main className="main_pag_inicial">
      <Carrossel />

      <section className="produtos-section">
        <h2 className="titulo-produtos">Mais vendidos</h2>

        <div className="produtos-grid">
          {produtos.length === 0 && <p>Carregando produtos...</p>}

          {produtos.map((p) => (
            <Card key={p.id_produto} produto={p} />
          ))}
        </div>
      </section>
    </main>
  );
}