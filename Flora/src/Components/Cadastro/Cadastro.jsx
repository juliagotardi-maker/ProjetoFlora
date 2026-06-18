import "./Cadastro.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const telefone = e.target.telefone.value;
    const senha = e.target.senha.value;
    const confirmar_senha = e.target.confirmar_senha.value;

    if (
      !nome ||
      !email ||
      !telefone ||
      !senha ||
      !confirmar_senha
    ) {
      setMensagem("Preencha todos os campos!");
      setTipoMensagem("erro");
      return;
    }

    if (senha !== confirmar_senha) {
      setMensagem("As senhas não coincidem!");
      setTipoMensagem("erro");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5002/api/Usuario",
        {
          nome,
          email,
          telefone,
          senha,
          confirmar_senha,
        }
      );

      localStorage.setItem(
        "usuario",
        JSON.stringify(response.data)
      );

      setMensagem("Cadastro realizado com sucesso!");
      setTipoMensagem("sucesso");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMensagem(
        error.response?.data?.mensagem ||
          "Erro ao cadastrar usuário"
      );

      setTipoMensagem("erro");
    }
  };

  return (
    <>


      <div className="cadastro-container">
        <form
          className="cadastro-form"
          onSubmit={handleSubmit}
        >
          <h2>Cadastro</h2>

          {mensagem && (
            <div className={`msg ${tipoMensagem}`}>
              {mensagem}
            </div>
          )}

          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
          />

          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
          />

          <input
            type="text"
            name="telefone"
            placeholder="Digite seu telefone"
          />

          <div className="senha-container">
            <input
              type={mostrarSenha ? "text" : "password"}
              name="senha"
              placeholder="Digite sua senha"
            />

            <span
              onClick={() =>
                setMostrarSenha(!mostrarSenha)
              }
            >
              {mostrarSenha ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          <div className="senha-container">
            <input
              type={
                mostrarConfirmar
                  ? "text"
                  : "password"
              }
              name="confirmar_senha"
              placeholder="Confirmar senha"
            />

            <span
              onClick={() =>
                setMostrarConfirmar(
                  !mostrarConfirmar
                )
              }
            >
              {mostrarConfirmar ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          <button type="submit">
            Criar conta
          </button>

          <div className="login-link">
            <p>Já possui uma conta?</p>

            <button
              type="button"
              className="voltar-login"
              onClick={() => navigate("/login")}
            >
              Fazer Login
            </button>
          </div>
        </form>
      </div>

    </>
  );
}