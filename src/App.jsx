import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./View/Dashboard/Dashboard";
import Menu from "./View/Menu/Menu";

function App() {
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Función para mover la página hacia la derecha después de 5 segundos
    const movePage = setTimeout(() => {
      document.querySelector(".app").classList.add("move-right");
    }, 500);

    return () => clearTimeout(movePage); // Limpia el timeout si el componente se desmonta
  }, []);

  return (
    <>
      <div className="app">
        <Menu setPage={setPage}></Menu>
        <Dashboard page={page}></Dashboard>
      </div>
    </>
  );
}

export default App;
