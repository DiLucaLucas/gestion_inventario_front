import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el registro, como una llamada a una API
    console.log("Datos de registro:", formData);

    // Redirigir a la pantalla de login después del registro
    navigate("/login");
  };

  return (
    <div className="bg-gray-900 flex justify-content-center align-items-center h-screen">
      <div className="bg-white p-6 w-80 border-round-lg">
        <div className="flex flex-column align-items-center mb-4">
          <Avatar
            icon="pi pi-user"
            className="text-black bg-gray-400 mr-2"
            size="xlarge"
            shape="circle"
          />
          <h3 className="font-bold text-4xl">¡Regístrate!</h3>
          <p className="text-center font-bold mt-0 text-black w-full text-lg">
            ¡Vamos a crear tu cuenta! Ingresa tus datos.
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="flex flex-column align-items-center w-full">
            <InputText
              id="nombre"
              type="text"
              className="w-full p-inputtext p-component p-3 mb-3"
              placeholder="Ingresa tu Nombre"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <InputText
              id="email"
              type="email"
              className="w-full p-inputtext p-component p-3 mb-3"
              placeholder="Ingresa tu Correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <InputText
              id="password"
              type="password"
              placeholder="Contraseña"
              className="w-full p-inputtext p-component p-3 mb-3"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <Button
            label="Crear cuenta"
            className="w-full font-bold border-none p-3 mt-4 border-round-lg"
            onClick={handleRegister}
          />
        </form>

        <div className="flex justify-content-center mt-4 text-black font-bold">
          ¿Ya tienes cuenta?
          <a
            href="/login"
            className="ml-2 text-custom text-sm no-underline text-blue-500 font-bold hover:text-blue-600"
          >
            Inicia sesión
          </a>
        </div>
      </div>
    </div>
  );
}
