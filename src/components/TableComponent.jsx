import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function BasicDemo() {
    const products = [
        { id: 1, name: 'Producto A', price: 20 },
        { id: 2, name: 'Producto B', price: 30 },
        { id: 3, name: 'Producto C', price: 40 },
    ];

    return (
        <div className="p-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Productos</h2>
        <div className="overflow-x-auto">
            <DataTable value={products} className="p-datatable-striped p-datatable-gridlines">
                <Column field="id" header="ID" className="" />
                <Column field="name" header="Nombre" />
                <Column field="price" header="Precio" className="font-bold" />
            </DataTable>
        </div>
    </div>
    );
}
        