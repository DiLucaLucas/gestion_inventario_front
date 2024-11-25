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
    <div className="bg-gray-900 flex justify-content-center align-items-center min-h-screen">
      <div className="bg-white p-6 w-80 border-round-lg">
        <div className="flex flex-column align-items-center mb-4">
          <Avatar
            icon="pi pi-user"
            className="text-black bg-white mr-2"
            size="xlarge"
            shape="circle"
          />
          <h3 className="font-bold text-black text-4xl">¡Iniciar Sesión!</h3>
          <p className="text-center font-bold mt-0 text-black w-full text-lg">
            Ingresá tus datos para iniciar sesión en tu cuenta.
          </p>
        </div>

        <div className="flex flex-column align-items-center w-full">
          <InputText
            id="email"
            type="text"
            className="w-full p-inputtext p-component p-3"
            placeholder="admin"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />

          <InputText
            id="password"
            type="password"
            placeholder="1234"
            className="w-full p-inputtext p-component mt-4 p-3"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>

        <div className="flex justify-content-center mt-4 text-black font-bold">
          No tienes cuenta?
          <a
            href="/register"
            className="ml-2 text-blue-500 text-sm no-underline font-bold hover:text-blue-300"
          >
            Registrate
          </a>
        </div>

        <Button
          label="Ingresar"
          className="w-full font-bold border-none p-3 mt-4 border-round-lg"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}
