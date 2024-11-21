import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import "primeflex/primeflex.css";

const CardComponent = ({ activities }) => {
  return (
    <div className="w-6"> {/* Ancho del Card al 60% */}
    <Card title="Actividad Reciente" className="p-4">
      <ul className="p-0">
        {activities && activities.length > 0 ? (
          activities.map((activity, index) => (
            <li
              key={index}
              className="flex flex-column sm:flex-row justify-content-between align-items-center mb-3 pb-3 border-bottom-1 surface-border w-full"
            >
              {/* Contenedor izquierdo */}
              <div className="flex align-items-center gap-3 w-full sm:w-auto">
                <span className="text-2xl">
                  {activity.action === "created" ? (
                    <i className="pi pi-plus-circle text-green-500"></i>
                  ) : (
                    <i className="pi pi-times-circle text-red-500"></i>
                  )}
                </span>
                <span className="font-bold">{activity.productName}</span>
              </div>

              {/* Contenedor derecho */}
              <div className="flex gap-3 align-items-center justify-content-start mt-3 sm:mt-0 w-full sm:w-auto">
                <Tag
                  value={activity.action === "created" ? "Creado" : "Eliminado"}
                  severity={activity.action === "created" ? "success" : "danger"}
                />
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No hay actividad reciente</p>
        )}
      </ul>
    </Card>
  </div>
  );
};

export default CardComponent;
