import "./carrossel.css";
import { useState, useEffect } from "react";

import b1 from "../../assets/banner1.png";
import b2 from "../../assets/banner2.png";
import b3 from "../../assets/banner3.png";

const imagens = [b1, b2, b3];

export default function Carrossel() {
  const [index, setIndex] = useState(0);

  function proximo() {
    setIndex((i) => (i + 1) % imagens.length);
  }

  function voltar() {
    setIndex((i) =>
      i === 0 ? imagens.length - 1 : i - 1
    );
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      proximo();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="carrossel">

      <img
        src={imagens[index]}
        alt="Banner Flora"
        className="fotos"
      />

      <button className="btn-carrossel left" onClick={voltar}>
        ❮
      </button>

      <button className="btn-carrossel right" onClick={proximo}>
        ❯
      </button>

    </section>
  );
}