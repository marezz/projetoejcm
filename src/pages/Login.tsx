import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { MaterialSymbol } from "react-material-symbol-icons";
import { Link } from "react-router-dom";
import logoraio from "../assets/logoraio.png";

function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col text-center items-center p-2 gap-5">
      <div className="flex flex-row w-full p-4 border-b-2 border-b-gray-400 justify-center">
        <Link to={"/"}>
          <MaterialSymbol
            icon="arrow_back"
            size={30}
            className="absolute left-4"
          />
        </Link>
        <h1 className="text-2xl font-medium">Entrar</h1>
      </div>
      <img src={logoraio} className="object-cover" />{" "}
      <div className="flex flex-col w-full gap-2">
        <div className="flex flex-row text-left w-full gap-2">
          <MaterialSymbol icon="mail" size={30} />
          <input
            placeholder="Digite seu Email"
            type="text"
            className="p-2 border-b-1 border-gray-400 w-full"
          />
        </div>
        <div className="flex flex-row text-left w-full gap-2">
          <MaterialSymbol icon="lock" size={30} />
          <input
            placeholder="•••••••••••"
            type={show ? "text" : "password"}
            className="p-2 border-b-1 border-gray-400 w-full"
          />
          <button type="button" onClick={() => setShow(!show)}>
            {show ? (
              <MaterialSymbol size={24} icon="visibility" />
            ) : (
              <MaterialSymbol size={24} icon="visibility_off" />
            )}
          </button>
        </div>

        <a className="underline text-xs text-right">Esqueci minha senha</a>
      </div>
      <button className="text-white bg-[#2B2B2B] rounded-full p-2 px-10">
        Entrar
      </button>
      <div className="w-full flex items-center p-2">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 text-md text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <span className="grid grid-cols-2 gap-8 p-4">
        <div className="aspect-square rounded-full overflow-hidden bg-[#2B2B2B]">
          <FaFacebookF
            color="white"
            size={24}
            className="w-full h-full object-cover p-5"
          />
        </div>
        <div className="aspect-square rounded-full overflow-hidden bg-[#2B2B2B]">
          <FaGoogle
            color="white"
            size={24}
            className="w-full h-full object-cover p-5"
          />
        </div>
      </span>
      <Link to={"/cadastro"} className="text-blue-500 underline">
        Não possui cadastro? Cadastre-se
      </Link>
    </div>
  );
}

export default Login;
