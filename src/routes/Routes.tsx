import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import PagErro from "../pages/PagErro";

function Layout() {
  return (
    <div className="flex flex-col justify-between gap-4">
      <main className="flex-grow">
        {/* This will be replaced by Home or Cadastro */}
        <Outlet />
      </main>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/erro" element={<PagErro />} />
      </Route>
    </Routes>
  );
}
