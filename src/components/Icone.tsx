type IconeProps = {
  titulo: string;
  img: string;
};

function Icone(props: IconeProps) {
  return (
    <div className="flex flex-col text-center items-center p-2 gap-2">
      <div className="aspect-square rounded-full overflow-hidden max-w-2/3">
        <img
          src={props.img}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
      <h3> {props.titulo}</h3>
    </div>
  );
}

export default Icone;
