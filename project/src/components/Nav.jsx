import {
  ChartColumn,
  Clock,
  Download,
  SquareArrowRightExit,
} from "lucide-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleExport = () => {
    window.print();
  };

  const options = [
    { name: "Dashboard", icon: ChartColumn, page: "/dashboard" },
    { name: "Convidados", icon: Clock, page: "/convidados" },
    { name: "Exportar", icon: Download, action: handleExport },
    { name: "Sair", icon: SquareArrowRightExit, action: handleLogout },
  ];

  return (
    <div className="h-full">
      <h1 className="text-black text-3xl font-bold p-5">Agencia Cerimonial</h1>
      <nav className="flex items-center flex-col">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isActive = opt.page === pathname;
          const classes = `p-5 mb-5 w-full gap-3 text-black flex rounded-lg cursor-pointer ${
            isActive ? "bg-blue-300" : "hover:bg-neutral-200 transition-colors"
          }`;

          return opt.page ? (
            <Link key={opt.name} to={opt.page} className={classes}>
              <Icon /> {opt.name}
            </Link>
          ) : (
            <div key={opt.name} onClick={opt.action} className={classes}>
              <Icon /> {opt.name}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Nav;
