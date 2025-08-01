import { MaterialSymbol } from "react-material-symbol-icons";

type HeaderProps = {
  onMenuClick: () => void;
};

function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="flex justify-between w-full top-0 bg-[#2B2B2B] text-white p-5 rounded-b-2xl">
      <button onClick={onMenuClick}>
        <MaterialSymbol icon="menu" size={30} />
      </button>
      <MaterialSymbol icon="shopping_cart" size={30} className="" />
    </div>
  );
}

export default Header;
