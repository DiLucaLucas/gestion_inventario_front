import { useEffect, useRef, useState } from "react";
import MenuComponent from "../../components/MenuComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import axios from "axios";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

export default function ProductosScreen() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState([true]);

    const toast = useRef(null);

    // Estado para menejar la visibilidad del modal
    const [visible, setVisible] = useState(false);

    const [formData, setFormData] = useState({
        codigo_interno: '',
        descripcion: '',
        precio: '',
        cantidad: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const payload = {
                codigo_interno: formData.codigo_interno,
                descripcion: formData.descripcion,
                precio: Number(formData.precio),
                cantidad: Number(formData.cantidad),
            }

            const response = await axios.post('http://localhost:3001/api/productos', payload);

            console.log('Datos enviados ✈️', payload);
            console.log(response.data);


            toast.current.show({
                severity: 'success',
                summary: 'Producto Creado',
                detail: `El producto fue creado con exito`,
            });
            setVisible(false);
        }
        catch (error) {
            console.error(error);

            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: `Ocurrio un error al crear el producto`,
            });
        } finally {
            getProductos();
            setLoading(false);
        }
    }

    const getProductos = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/productos');
            setProductos(response.data.result.data)
        } catch (error) {
            console.error(error);
        }
    }


    const handleDelete = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3001/api/productos/${id}`);
            setProductos((prevProductos) => prevProductos.filter((product) => product.idproducto !== id));

            toast.current.show({
                severity: 'success',
                summary: 'Producto eliminado',
                detail: `El producto con ID ${id} ha sido eliminado.`,
            });
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            toast.current.show({
                severity: 'error',
                summary: 'Error',
                detail: 'No se pudo eliminar el producto.',
            });
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetch('http://localhost:3001/api/productos')
            .then((response) => response.json())
            .then((data) => {
                if (data.ok && Array.isArray(data.result.data)) {
                    setProductos(data.result.data);
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const productColumns = [
        { field: 'idproducto', header: 'ID' },
        { field: 'codigo_interno', header: 'Codigo Interno' },
        { field: 'descripcion', header: 'Descripcion' },
        { field: 'precio', header: 'Precio' },
        { field: 'cantidad', header: 'Cantidad' },
        {
            header: 'Acciones',
            body: (rowData) => (
                <Button
                    label="Eliminar"
                    icon="pi pi-trash"
                    className="p-button-danger p-button-sm"
                    onClick={() => handleDelete(rowData.idproducto)}
                />
            )
        }
    ]

    return (
        <div className='min-h-screen flex flex-column bg-dark-custom'>
            <Toast ref={toast} />
            <header className="sticky top-0 z-11">
                <MenuComponent />
            </header>
            <main className="flex-1 pt-6 pr-4 pl-4 overflow-auto">
                {/* Botón para abrir el modal */}
                <Button label="Nuevo Producto" icon="pi pi-plus" onClick={() => setVisible(true)} />

                <div className="mb-2">

                    <ModalComponent
                        visible={visible}
                        onHide={() => setVisible(false)}
                        formData={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />                </div>

                <TableComponent data={productos} columns={productColumns} loading={loading} />
            </main>
        </div>
    );
}
