import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const WelcomeScreen = () => {
  // Hook para redirigir
  const navigate = useNavigate();

  // Funcion para Login
  const handleLoginClick = () => {
    navigate("/login");
  };

  // Función para Registro
  const handleRegisterClick = () => {
    navigate("/register");
  };
  return (
    <div className="bg-gray-900 flex align-items-center justify-content-center" style={{ height: "100vh" }} >
      <div className="text-center">
        <h1 className="text-teal-100 font-bold text-4xl">
          Proyecto Final: Laboratorio Full Stack + Programación Backend
        </h1>
        {/* <p className="text-teal-100 m-4 text-2xl">
          Somos Jeronimo Huincaman y Lucas Di Luca, estudiantes de Tecnicatura
          Superior Full Stack en ITS. Este proyecto fue realizado con el
          objetivo de demostrar los conocimientos adquiridos en Laboratorio Full
          Stack y Programacion Backend
        </p> */}
        <div className="flex align-items-center justify-content-center mt-4">
          <Button label="Iniciar Sesión" icon="pi pi-sign-in" className="bg-teal-500 mr-3 hover:bg-teal-600 border-none" onClick={handleLoginClick} />
          <Button label="Registrarse" icon="pi pi-user-plus" className="bg-teal-500 hover:bg-teal-600 border-none" onClick={handleRegisterClick} />
        </div>
      </div>
    </div>
  );
};
export default WelcomeScreen;
