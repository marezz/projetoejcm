import { useState } from "react";

import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";
import logoraio from "../assets/logoraio.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

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
          <img
            className="w-sm rounded-2xl"
            src="https://github.com/shopifypartners/shopify-product-csvs-and-images/blob/master/images/bicycles/Golf_Demos_1_2048x2048.jpeg?raw=true"
            alt=""
          />
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
        <Categorias />
        <Produtos titulo="Produtos em destaque" />
        <Produtos titulo="Mais vendidos" />
      </div>
      <Footer />
    </div>
  );
}
