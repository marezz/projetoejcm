import type { Key } from "react";
import Card from "./Card";

function Produtos(props) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-medium pb-2 border-b-2 border-b-gray-400">
        {props.titulo}
      </h1>

      <div className="flex gap-4 overflow-x-scroll">
        {props.produtos.map(
          (
            produto: [string, number, string],
            index: Key | null | undefined
          ) => (
            <Card
              key={index}
              img={produto[2]}
              valor={produto[1]}
              fav={false}
              titulo={produto[0]}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Produtos;
