import { MaterialSymbol } from "react-material-symbol-icons";

type CardProps = {
  img: string;
  titulo: string;
  valor: number;
  fav: boolean;
};

function Card(props: CardProps) {
  return (
    <div className="flex flex-col gap-2 bg-white shadow-md rounded-xl w-fit p-3 mb-2">
      <div className="aspect-square rounded-md overflow-hidden">
        <img
          src={props.img}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between w-full max-w-sm">
        <div className="flex flex-col">
          <p>{props.titulo}</p>
          <p className="text-gray-900 font-bold">R${props.valor},00</p>
        </div>
        <div className="flex items-center justify-center w-10 h-10">
          <MaterialSymbol
            theme="rounded"
            icon="favorite"
            size={30}
            filled={props.fav}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
