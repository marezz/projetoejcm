import Card from "./Card";

type texto = {
  titulo: string;
};

function Produtos(props: texto) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-medium pb-2 border-b-2 border-b-gray-400">
        {props.titulo}
      </h1>

      <div className="flex overflow-x-scroll gap-5">
        <Card
          img="https://github.com/shopifypartners/shopify-product-csvs-and-images/blob/master/images/bicycles/Golf_Demos_1_2048x2048.jpeg?raw=true"
          valor={1000}
          fav={false}
          titulo="Celular"
        />
        <Card
          img="https://github.com/shopifypartners/shopify-product-csvs-and-images/blob/master/images/bicycles/Golf_Demos_1_2048x2048.jpeg?raw=true"
          valor={1000}
          fav={false}
          titulo="Celular"
        />
        <Card
          img="https://github.com/shopifypartners/shopify-product-csvs-and-images/blob/master/images/bicycles/Golf_Demos_1_2048x2048.jpeg?raw=true"
          valor={1000}
          fav={false}
          titulo="Celular"
        />
        <Card
          img="https://github.com/shopifypartners/shopify-product-csvs-and-images/blob/master/images/bicycles/Golf_Demos_1_2048x2048.jpeg?raw=true"
          valor={1000}
          fav={false}
          titulo="Celular"
        />
        <Card
          img="https://github.com/shopifypartners/shopify-product-csvs-and-images/blob/master/images/bicycles/Golf_Demos_1_2048x2048.jpeg?raw=true"
          valor={1000}
          fav={false}
          titulo="Celular"
        />
      </div>
    </div>
  );
}

export default Produtos;
