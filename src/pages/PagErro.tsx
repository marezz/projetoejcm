import { MaterialSymbol } from "react-material-symbol-icons";
import { Link } from "react-router-dom";

function PagErro() {
  return (
    <div className="flex flex-col text-center items-center p-2 gap-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxu10IxLlCNMY2L6eydhFPFmNBfkeCmeygg&s"
        alt=""
      />
      <div className="absolute right-20 bottom-20 bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
        <Link to="/">
          <MaterialSymbol
            icon="arrow_back"
            size={30}
            className="items-center justify-center"
          />
        </Link>
      </div>
    </div>
  );
}

export default PagErro;
