import "./Buques.css";
import Carrinho from "../../Components/Carrinho/Carrinho";

import buque1 from "../../assets/buque1.png";
import buque2 from "../../assets/buque2.png";
import buque3 from "../../assets/buque3.png";
import buque4 from "../../assets/buque4.png";

export default function Buques() {
  const produtos = [
    {
      nome: "Buquê Encanto",
      preco: 189.9,
      imagem: buque1,
    },
    {
      nome: "Buquê Delicadeza",
      preco: 159.9,
      imagem: buque2,
    },
    {
      nome: "Buquê Amor Perfeito",
      preco: 209.9,
      imagem: buque3,
    },
    {
      nome: "Buquê Sonho",
      preco: 199.9,
      imagem: buque4,
    },
    {
      nome: "Buquê Lírios Brancos",
      preco: 179.9,
      imagem: buque1,
    },
    {
      nome: "Buquê Flores do Campo",
      preco: 149.9,
      imagem: buque2,
    },
    {
      nome: "Buquê Doçura",
      preco: 159.9,
      imagem: buque3,
    },
    {
      nome: "Buquê Tulipas",
      preco: 169.9,
      imagem: buque4,
    },
  ];

  return (
    <div className="pagina-buques">
      <div className="breadcrumb">
        Home &gt; Buquês
      </div>

      <h1 className="titulo-buques">Buquês 🌸</h1>

      <p className="descricao-buques">
        Escolha o buquê perfeito para cada ocasião.
      </p>

      <div className="conteudo-buques">
        <aside className="sidebar">
          <h3>Categorias</h3>

          <ul>
            <li>Todos os Buquês</li>
            <li>Rosas</li>
            <li>Tulipas</li>
            <li>Lírios</li>
            <li>Flores do Campo</li>
            <li>Mix de Flores</li>
          </ul>

          <hr />

          <h3>Ocasiões</h3>

          <label>
            <input type="checkbox" />
            Aniversário
          </label>

          <label>
            <input type="checkbox" />
            Amor
          </label>

          <label>
            <input type="checkbox" />
            Agradecimento
          </label>

          <label>
            <input type="checkbox" />
            Parabéns
          </label>

          <label>
            <input type="checkbox" />
            Nascimento
          </label>
        </aside>

        <section className="area-produtos">
          <div className="ordenacao">
            <select>
              <option>Mais vendidos</option>
              <option>Menor preço</option>
              <option>Maior preço</option>
            </select>
          </div>

          <div className="grid-produtos">
            {produtos.map((produto, index) => (
              <Carrinho
                key={index}
                nome={produto.nome}
                preco={produto.preco}
                imagem={produto.imagem}
              />
            ))}
          </div>

          <div className="paginacao">
            <button className="ativo">1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </section>
      </div>
    </div>
  );
}