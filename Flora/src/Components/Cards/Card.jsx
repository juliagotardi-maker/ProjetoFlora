import "./card.css";

export default function CardCategoria({ imagem, titulo }) {
  return (
    <div className="categoria-card">

      <img
        src={imagem}
        alt={titulo}
        className="categoria-img"
      />

      <h3>{titulo}</h3>

    </div>
  );
}