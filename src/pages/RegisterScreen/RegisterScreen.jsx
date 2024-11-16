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
    <div className="background-image flex align-items-center justify-content-center min-h-screen">
      <div className="flex flex-column bg-dark p-4 w-full rounded sm:w-25rem">
        <div className="flex flex-column align-items-center mb-4 mt-4">
          <Avatar
            icon="pi pi-user"
            className="avatar-border bg-dark mb-3"
            size="xlarge"
            shape="circle"
          />
          <h3 className="font-bold text-custom">¡Registrate!</h3>
          <p className="text-center font-bold mt-0 text-light w-full">
            ¡Vamos a crear tu cuenta! Ingresa tus datos.
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="flex flex-column text-center gap-4">
            <InputText
              id="nombre"
              type="text"
              className="w-full mt-2"
              placeholder="Ingresa tu Nombre"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <InputText
              id="email"
              type="text"
              className="w-full mt-2"
              placeholder="Ingresa tu Correo"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className="p-inputtext p-component w-full custom-password mt-4"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button
            label="Crear cuenta"
            className="w-full p-button-success mt-6 btn-success-custom animate-width animation-duration-3000 animation-iteration-infinite"
            onClick={handleRegister}
          />
        </form>
      </div>
    </div>
  );
}
