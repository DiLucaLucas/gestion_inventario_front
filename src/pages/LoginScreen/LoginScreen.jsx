import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Avatar } from "primereact/avatar";

export default function LoginScreen() {
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

        {/* Contenedor de los inputs */}
        <div className="flex flex-column align-items-center w-full gap-4">
          <InputText
            id="email"
            type="text"
            className="w-full"
            placeholder="Ingresa tu correo"
          />

          {/* Ajuste en Password para que tome el ancho completo */}
          <Password
            id="password"
            toggleMask
            className="w-full"
            placeholder="Contraseña"
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
          className="w-full p-button-success mt-4"
          style={{ backgroundColor: "#4BFFB3", color: "#3D3D3D" }}
        />
      </div>
    </div>
  );
}
