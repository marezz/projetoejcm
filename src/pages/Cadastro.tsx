import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { MaterialSymbol } from "react-material-symbol-icons";
import { Link } from "react-router-dom";

function Cadastro() {
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
        <h1 className="text-2xl font-medium">Cadastrar-se</h1>
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
      <div className="flex flex-col text-left w-full gap-4">
        <div className="w-full flex items-center p-2">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-md text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col text-left w-full gap-2">
          <label>Nome:</label>
          <input
            placeholder="Digite seu Nome"
            type="text"
            className="border-b-1 border-black"
          />
        </div>
        <div className="flex flex-col text-left w-full gap-2">
          <label>CPF:</label>
          <input
            placeholder="Digite seu CPF"
            type="number"
            className="border-b-1 border-black"
          />
        </div>
        <div className="flex flex-col text-left w-full gap-2">
          <label>Telefone:</label>
          <input
            placeholder="Digite seu Telefone"
            type="number"
            className="border-b-1 border-black"
          />
        </div>
        <div className="flex flex-col text-left w-full gap-2">
          <label>E-mail:</label>
          <input
            placeholder="Digite seu Email"
            type="email"
            className="border-b-1 border-black"
          />
        </div>
        <div className="flex flex-col text-left w-full gap-2">
          <label>Senha:</label>
          <input
            placeholder="Digite sua senha"
            type="password"
            className="border-b-1 border-black"
          />
        </div>
        <div className="flex flex-col text-left w-full gap-2">
          <label>Confirme sua senha:</label>
          <input
            placeholder="Confirme sua senha"
            type="password"
            className="border-b-1 border-black"
          />
        </div>
      </div>
      <button className="text-white bg-[#2B2B2B] rounded-full p-4 px-8">
        Cadastrar-se!
      </button>
    </div>
  );
}

export default Cadastro;
