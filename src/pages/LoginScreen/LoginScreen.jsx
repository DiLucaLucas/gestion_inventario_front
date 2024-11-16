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
    <div className="background-image flex align-items-center justify-content-center min-h-screen">
      <div className="bg-dark p-4 w-full rounded sm:w-25rem">
        <div className="flex flex-column align-items-center mb-4 mt-4">
          <Avatar
            icon="pi pi-user"
            className="avatar-border bg-dark mb-3"
            size="xlarge"
            shape="circle"
          />
          <h3 className="font-bold text-custom">¡Iniciar Sesión!</h3>
          <p className="text-center font-bold mt-0 text-light w-full">
            Ingresá tus datos para iniciar sesión en tu cuenta.
          </p>
        </div>

        <div className="flex flex-column align-items-center w-full gap-4">
          <InputText
            id="email"
            type="text"
            className="w-full"
            placeholder="Ingresa tu correo"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />

          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="p-inputtext p-component w-full custom-password mt-4"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>

        <div className="flex justify-content-center mt-4">
          <a
            href="#"
            className="text-custom text-sm no-underline hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <Button
          label="Ingresar"
          className="w-full p-button-success mt-4 btn-success-custom"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}
