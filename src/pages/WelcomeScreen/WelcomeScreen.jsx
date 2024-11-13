import { Button } from "primereact/button";

export const WelcomeScreen = () => {
  return (
    <div
      className=" flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        <h1 className="m-0">
          Proyecto Final: Laboratorio Full Stack + Programación Backend
        </h1>
        <div className="flex align-items-center justify-content-center mt-4">
          <Button
            label="Iniciar Sesión"
            icon="pi pi-sign-in"
            className="p-button-outlined mr-3"
          />
          <Button
            label="Registrarse"
            icon="pi pi-user-plus"
            className="p-button-outlined"
          />
        </div>
      </div>
    </div>
  );
};
export default WelcomeScreen;
