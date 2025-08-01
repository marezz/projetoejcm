import { MaterialSymbol } from "react-material-symbol-icons";
import { Link } from "react-router-dom";

type MenuProps = {
  open: boolean;
  onClose: () => void;
};

// SideMenu.jsx
export default function Menu({ open, onClose }: MenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 z-40 ${
          open
            ? "opacity-80 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3xs h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 flex justify-between items-center bg-[#2B2B2B] text-white">
          <Link
            to={"/login"}
            className="flex flex-row p-2 gap-4 items-center-safe"
          >
            <div className="aspect-square rounded-full overflow-hidden w-20">
              <MaterialSymbol
                icon="person"
                filled={true}
                className="w-full h-full object-cover p-5"
              />
            </div>
            <h2 className="text-lg font-bold ">Usuário</h2>
          </Link>
        </div>
        <div className="p-4 h-full">
          <ul className="space-y-4">
            <li>Editar Dados</li>
            <li>Meus Pedidos</li>
            <li>Meus Produtos</li>
            <li>Meu Carrinho</li>
          </ul>
          <button className="absolute bottom-4">Sair</button>
        </div>
      </div>
    </>
  );
}
