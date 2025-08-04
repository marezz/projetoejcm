import { useState } from "react";

import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";
import logoraio from "../assets/logoraio.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

import cel1 from "../assets/cel1.png";
import cel2 from "../assets/cel2.png";
import cel3 from "../assets/cel2.png";
import caixadesom from "../assets/caixadesom.png";
import carregador from "../assets/carregador.png";
import fone from "../assets/fone.png";
import headphone from "../assets/headphone.png";
import laptop from "../assets/laptop.png";
import mouse from "../assets/mouse.png";
import mousepad from "../assets/mousepad.png";
import relogio from "../assets/relogio.png";
import tablet from "../assets/tablet.png";
import teclado from "../assets/teclado.png";
import tv1 from "../assets/tv1.png";
import tv2 from "../assets/tv2.png";

import c1 from "../assets/celulares.png";
import c2 from "../assets/notebooks.png";
import c3 from "../assets/tablets.png";
import c4 from "../assets/perifericos.png";
import c5 from "../assets/tvs.png";
import c6 from "../assets/acessorios.png";
import c7 from "../assets/pcs.png";
import c8 from "../assets/smartwatches.png";

import mainimg from "../assets/main.jpg";

const prods1 = [
  ["Celular", 800, cel1],
  ["Capa protetora", 20, cel2],
  ["Carregador", 50, carregador],
  ["Mousepad", 60, mousepad],
  ["Teclado", 120, teclado],
];

const prods2 = [
  ["Smart TV", 1400, tv1],
  ["Monitor", 750, tv2],
  ["Headset", 250, headphone],
  ["Tablet", 300, tablet],
  ["Notebook", 900, laptop],
];

const prods3 = [
  ["Smartphone", 3200, cel3],
  ["Smartwatch", 900, relogio],
  ["Mouse", 50, mouse],
  ["Fone de ouvido", 50, fone],
  ["Caixa de som", 300, caixadesom],
];

const categ = [
  ["Celulares", c1],
  ["Notebooks", c2],
  ["Tablets", c3],
  ["Periféricos", c4],
  ["TVs", c5],
  ["Acessórios", c6],
  ["PCs", c7],
  ["Smartwatches", c8],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Header onMenuClick={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex flex-col p-2 gap-5">
        <div className="flex flex-col items-center p-2 gap-2">
          <span className="flex flex-row items-center-safe">
            <img src={logoraio} className="w-15" />
            <h1 className="font-russo text-2xl text-orange-400">
              Bem-vindo à Elektro!
            </h1>
          </span>
          <Link to={"/erro"}>
            <img
              className="w-sm rounded-2xl h-fit aspect-video"
              src={mainimg}
              alt=""
            />
          </Link>
        </div>
        <div className="flex space-x-4 justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="gray" />
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="lightgray" />
          </svg>
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="lightgray" />
          </svg>
        </div>
        <Categorias categorias={categ} />
        <Produtos titulo="Para você" produtos={prods1} />
        <Produtos titulo="Produtos em destaque" produtos={prods2} />
        <Produtos titulo="Mais vendidos" produtos={prods3} />
      </div>
      <Footer />
    </div>
  );
}
