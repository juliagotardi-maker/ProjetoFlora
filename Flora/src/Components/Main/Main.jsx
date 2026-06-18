import "./main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MinhasCompras() {
  const [compras, setCompras] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarCompras();
  }, []);

  const carregarCompras = async () => {
    try {
      const usuario = JSON.parse(
        localStorage.getItem("usuario")
      );

      if (!usuario) return;

      const response = await axios.get(
        `http://localhost:5002/api/MinhasCompras/${usuario.id_usuario}`
      );

      setCompras(response.data);
    } catch (error) {
      console.log("Erro:", error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <Header />

      <main className="compras-page">
        <h1>Minhas Compras</h1>

        {carregando && (
          <p>Carregando compras...</p>
        )}

        {!carregando && compras.length === 0 && (
          <p>Nenhuma compra encontrada.</p>
        )}

        {compras.map((compra) => (
          <div
            key={compra.id_minhas_compras}
            className="compra-card"
          >
            <div className="compra-header">
              <h3>
                Pedido #
                {compra.id_minhas_compras}
              </h3>

              <span
                className={`status ${compra.status_compra?.toLowerCase()}`}
              >
                {compra.status_compra}
              </span>
            </div>

            <p>
              Valor Total:
              <strong>
                {" "}
                R$
                {Number(compra.valor).toFixed(2)}
              </strong>
            </p>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}