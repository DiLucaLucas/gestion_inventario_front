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
    <header className="bg-almost-black flex justify-content-between align-items-center text-white px-6">
      <h2 className="ml-4 text-primary-green text-3xl font-bold">J-Log</h2>
      <div className="flex">
        <Button
          label="Iniciar Sesión"
          icon="pi pi-sign-in"
          className="bg-primary-green text-almost-black font-bold mr-2 border-none hover: bg-success-green"
          onClick={handleLoginClick}
        />
        <Button
          label="Registrarse"
          icon="pi pi-user-plus"
          className="bg-primary-green text-almost-black hover: bg-success-green font-bold border-none"
          onClick={handleRegisterClick}
        />
      </div>
    </header>
  );
};

export default HeaderComponent;