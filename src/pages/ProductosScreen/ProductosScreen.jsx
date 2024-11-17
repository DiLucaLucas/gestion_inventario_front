import { useEffect, useState } from "react";
import MenuComponent from "../../components/MenuComponent";
import TableComponent from "../../components/TableComponent/TableComponent";

export default function ProductosScreen() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        fetch('http://localhost:3001/api/productos')
        .then((response) => response.json())
        .then((data) => {
            if (data.ok && Array.isArray(data.result.data)){
                setProductos(data.result.data);
            }
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });
    }, []);

    const productColumns = [
        { field: 'idproducto', header: 'ID'},
        { field: 'codigo_interno', header: 'Codigo Interno'},
        { field: 'descripcion', header: 'Descripcion'},
        { field: 'precio', header: 'Precio'},
        { field: 'cantidad', header: 'Cantidad'},
    ]

    return (
        <div className='min-h-screen flex flex-column bg-dark-custom'>
            <header className="sticky top-0 z-11">
                <MenuComponent />
            </header>
            <main className="flex-1 pt-6 pr-4 pl-4 overflow-auto">
                <TableComponent data={productos} columns={productColumns} loading={loading}/>
            </main>
        </div>
    );
}
