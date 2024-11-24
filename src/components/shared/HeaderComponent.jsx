import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
  const navigate = useNavigate();

  // Función para Login
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Función para Registro
  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <header className="bg-gray-800 flex justify-content-between align-items-center px-6 text-white">
      <h2 className="ml-4 text-3xl font-bold">J-Log</h2>
      <div className="flex">
        <Button
          label="Iniciar Sesión"
          icon="pi pi-sign-in"
          className="font-bold mr-2 border-none"
          onClick={handleLoginClick}
        />
        <Button
          label="Registrarse"
          icon="pi pi-user-plus"
          className=" font-bold border-none"
          onClick={handleRegisterClick}
        />
      </div>
    </header>
  );
};

export default HeaderComponent;