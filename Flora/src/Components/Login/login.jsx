import "./login.css";
import Header_login from "../Header_login/Header_login";
import Footer from "../Footer/Footer";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const senha = e.target.senha.value;

    if (!email || !senha) {
      setMostrarAviso(true);
      return;
    }

    setMostrarAviso(false);

    try {
      const response = await axios.post(
        "http://localhost:5002/api/Login",
        { email, senha }
      );

      setMensagem(
        response.data.mensagem ||
        "Login realizado com sucesso!"
      );

      setTipoMensagem("sucesso");

      localStorage.setItem(
        "usuario",
        JSON.stringify(response.data)
      );

      navigate("/Main");
    } catch (error) {
      const mensagemErro =
        error.response?.data?.mensagem ||
        error.response?.data?.message ||
        "Erro ao fazer login";

      setMensagem(mensagemErro);
      setTipoMensagem("erro");
    }
  };

  return (
    <>
      <Header_login />

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          {mensagem && (
            <div className={`msg ${tipoMensagem}`}>
              {mensagem}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
          />

          <div className="senha-container">
            <input
              type={mostrarSenha ? "text" : "password"}
              name="senha"
              placeholder="Digite sua senha"
            />

            <span onClick={() => setMostrarSenha(!mostrarSenha)}>
              {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {mostrarAviso && (
            <p className="aviso">
              Preencha todos os campos!
            </p>
          )}

          <button type="submit">
            Entrar
          </button>

          <div className="register">
            <p>Não tem conta ainda?</p>

            <button
              type="button"
              className="register-btn"
              onClick={() => navigate("/cadastro")}
            >
              Criar conta
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}