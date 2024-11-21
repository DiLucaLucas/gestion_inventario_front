import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    // Simular validación de credenciales
    if (credentials.username === "admin" && credentials.password === "1234") {
      console.log("Login exitoso!");

      // Redirigir al Home
      navigate("/home");
    } else {
      console.log("Credenciales inválidas");
      alert("Usuario o contraseña incorrectos");
    }
  };
  
  return (
    <div className="bg-almost-black flex justify-content-center align-items-center min-h-screen">
      <div className="bg-background-gray p-6 w-80 border-round-lg">
        <div className="flex flex-column align-items-center mb-4">
          <Avatar
            icon="pi pi-user"
            className="bg-primary-green"
            size="xlarge"
            shape="circle"
          />
          <h3 className="font-bold text-success-green text-3xl">¡Iniciar Sesión!</h3>
          <p className="text-center font-bold mt-0 text-white w-full text-lg">
            Ingresá tus datos para iniciar sesión en tu cuenta.
          </p>
        </div>

        <div className="flex flex-column align-items-center w-full">
          <InputText
            id="email"
            type="text"
            className="w-full p-inputtext p-component p-3"
            placeholder="Ingresa tu correo"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />

          <InputText
            id="password"
            type="password"
            placeholder="Contraseña"
            className="w-full p-inputtext p-component mt-4 p-3"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>

        <div className="flex justify-content-center mt-4 text-white font-bold">
          No tienes cuenta?
          <a
            href="#"
            className="ml-2 text-custom text-sm no-underline text-primary-green font-bold hover: text-success-green"
          >
            Registrate
          </a>
        </div>

        <Button
          label="Ingresar"
          className="w-full font-bold text-almost-black bg-primary-green border-none p-3 mt-4 bg-success-green border-round-lg"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}
