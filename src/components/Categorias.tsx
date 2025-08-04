import type { Key } from "react";
import Icone from "./Icone";

function Categorias(props) {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl font-medium pb-2 border-b-2 border-b-black">
        Categorias Elektro
      </h1>
      <div className="grid grid-cols-4 justify-evenly p-2">
        {props.categorias.map(
          (categoria: [string, string], index: Key | null | undefined) => (
            <Icone key={index} img={categoria[1]} titulo={categoria[0]} />
          )
        )}
      </div>
    </div>
  );
}

export default Categorias;
