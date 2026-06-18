import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import api from "../../Services/Api";
import "./carrinho.css";

export default function Carrinho() {
  const [compra, setCompra] = useState(null);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  async function carregarCarrinho() {
    try {
      const res = await api.get("/MinhasCompras");
      setCompra(res.data);
    } catch (error) {
      console.log("Erro ao carregar carrinho:", error);
    }
  }

  async function finalizarCompra() {
    try {
      await api.put(`/MinhasCompras/${compra.id_minhas_compras}`, {
        status_compra: "Finalizada"
      });

      carregarCarrinho();
    } catch (error) {
      console.log("Erro ao finalizar compra:", error);
    }
  }

  if (!compra || !compra.itens || compra.itens.length === 0) {
    return (
      <main className="carrinho-page">
        <Header />
        <h1>Meu Carrinho</h1>
        <p style={{ textAlign: "center", color: "#666" }}>
          Seu carrinho está vazio
        </p>
        <Footer />
      </main>
    );
  }

  const total = compra.itens.reduce(
    (acc, item) => acc + item.produto.preco * item.quantidade,
    0
  );

  return (
    <main className="carrinho-page">
      <Header />

      <h1>Meu Carrinho</h1>

      {compra.itens.map((item) => (
        <div className="produto" key={item.id_itens}>
          <img
            className="produto-img"
            src={item.produto.imagem}
            alt={item.produto.nome}
          />

          <div className="produto-info">
            <h3>{item.produto.nome}</h3>
            <p>Quantidade: {item.quantidade}</p>
          </div>

          <span>R$ {item.produto.preco.toFixed(2)}</span>
        </div>
      ))}

      <div className="total">
        <h2>Total: R$ {total.toFixed(2)}</h2>
      </div>

      <button onClick={finalizarCompra}>
        Finalizar Compra
      </button>

      <Footer />
    </main>
  );
}