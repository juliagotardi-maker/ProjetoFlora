import "./login.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const senha = e.target.senha.value;

    if (!email || !senha) {
      setMostrarAviso(true);
      return;
    }

    setMostrarAviso(false);
    alert("Login realizado com sucesso!");
  };

  return (
    <>
      <Header />

      <div className="login-container">
        <div className="login-left">
          <h1>Bem-vinda ♡</h1>

          <p>Entre para continuar e transformar momentos em memórias.</p>

          {mostrarAviso && (
            <div className="login-warning">
              Todos os campos são obrigatórios.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="seuemail@exemplo.com"
              />
            </div>

            <div className="input-group password-group">
              <label>Senha</label>

              <div className="password-wrapper">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  name="senha"
                  placeholder="Digite sua senha"
                />

                <span
                  className="eye-icon"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button type="submit">Entrar</button>
          </form>

          <div className="register">
            <p>Ainda não possui uma conta?</p>

            <button type="button" className="register-btn">
              Criar Conta
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}