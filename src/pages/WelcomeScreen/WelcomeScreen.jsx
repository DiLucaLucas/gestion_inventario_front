import { Button } from "primereact/button";

export const WelcomeScreen = () => {
  return (
    <div
      className="bg-indigo-900 flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        <h1 className="text-teal-100 font-bold text-4xl">
          Proyecto Final: Laboratorio Full Stack + Programación Backend
        </h1>
        <div className="flex align-items-center justify-content-center mt-4">
          <Button
            label="Iniciar Sesión"
            icon="pi pi-sign-in"
            className="bg-teal-500 mr-3 hover:bg-teal-600 border-none"
          />
          <Button
            label="Registrarse"
            icon="pi pi-user-plus"
            className="bg-teal-500 hover:bg-teal-600 border-none"
          />
        </div>
      </div>
    </div>
  );
};
export default WelcomeScreen;
