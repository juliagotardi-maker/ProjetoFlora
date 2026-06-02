import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-info">
        <h3>Flora 🌷</h3>
        <p>Flores, plantas e presentes para momentos especiais.</p>
      </div>

      <div className="footer-links">
        <h4>Categorias</h4>
        <p>Buquês</p>
        <p>Plantas</p>
        <p>Vasos</p>
        <p>Presentes</p>
      </div>

      <div className="footer-contato">
        <h4>Contato</h4>
        <p>(14) 99999-9999</p>
        <p>contato@flora.com</p>
      </div>

    </footer>
  );
}