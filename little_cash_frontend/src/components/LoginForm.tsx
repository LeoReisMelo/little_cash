import Image from "next/image";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";

const LOGIN_MUTATION = gql`
  mutation ($loginDto: LoginDto!) {
    login(loginDto: $loginDto) {
      access_token
      refresh_token
      roles
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mensagem de erro
  const router = useRouter();

  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      console.log("Login successful", data);
      // Armazenar tokens ou redirecionar
      router.push("/"); // Redireciona para a página inicial (Home)
    },
    onError: (error) => {
      console.error("Login error", error);
      setErrorMessage(error.message); // Define a mensagem de erro
    },
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Reseta a mensagem de erro ao tentar logar
    try {
      await login({ variables: { loginDto: { email, password } } });
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Lado esquerdo: informações de login */}
      <div className="flex flex-col justify-center items-center w-1/2 p-8">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={300} // Largura definida
          height={100} // Altura definida
          className="mb-6" // Use classes do Tailwind para controle adicional
        />

        <form onSubmit={handleLogin} className="w-full">
          {/* Input de Email */}
          <div className="relative w-full mb-4">
            <EnvelopeIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Input de Senha */}
          <div className="relative w-full mb-4">
            <LockClosedIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 h-5 w-5"
            >
              {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </button>
          </div>

          {/* Exibe a mensagem de erro se houver */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full mt-4 py-2 bg-[#FB8500] text-white rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>

          <p className="mt-4 text-center">
            <a href="#" className="text-black">
              Forgot password?
            </a>
          </p>
        </form>
      </div>

      {/* Lado direito: imagem de fundo */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: "url('/image-login-bg.jpg')" }}
      ></div>
    </div>
  );
};

export default Login;