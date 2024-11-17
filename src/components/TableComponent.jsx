import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function TableComponent() {
    // Estado para almacenar los productos
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/api/productos')
            .then((response) => {
                // Verifica que la respuesta es exitosa
                if (!response.ok) {
                    throw new Error('Error en la petición');
                }
                // Convierte la respuesta a JSON
                return response.json();
            })
            .then((data) => {
                // Verifica los datos recibidos
                console.log('Datos recibidos:', data);
                // Verifica que los datos tengan el formato esperado
                if (data.ok && data.result && Array.isArray(data.result.data)) {
                    // Asigna los datos al estado
                    setProductos(data.result.data);
                } else {
                    console.error('Unexpected data format:', data);
                    // En caso de error, asigna un arreglo vacío
                    setProductos([]);
                }
                // Desactiva el loading después de recibir la respuesta
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error en la petición:', error);
                // Desactiva el loading en caso de error
                setLoading(false);
                // Asigna un arreglo vacío en caso de error 
                setProductos([]);
            });
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-4xl font-bold mb-4 text-center">Productos</h2>
            <div className="overflow-x-auto">
                <DataTable value={Array.isArray(productos) ? productos : []} loading={loading} paginator rows={10}>
                    <Column field="idproducto" header="ID" />
                    <Column field="codigo_interno" header="Código Interno" />
                    <Column field="descripcion" header="Descripción" />
                    <Column field="precio" header="Precio" />
                    <Column field="cantidad" header="Cantidad" />
                </DataTable>
            </div>
        </div>
    );
}
