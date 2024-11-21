import { useEffect, useState } from "react";
import MenuComponent from "../../components/MenuComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import axios from "axios";

export default function ProductosScreen() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState([true]);

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

            setVisible(false);
        }
        catch (error) {
            console.error(error);
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
    ]

    return (
        <div className='min-h-screen flex flex-column bg-dark-custom'>
            <header className="sticky top-0 z-11">
                <MenuComponent />
            </header>
            <main className="flex-1 pt-6 pr-4 pl-4 overflow-auto">
                {/* Botón para abrir el modal */}
                <Button label="Nuevo Producto" icon="pi pi-plus" onClick={() => setVisible(true)} />

                <div className="mb-2">
                    {/* Modal */}
                    <Dialog
                        header="Agregar Producto"
                        visible={visible}
                        style={{ width: '30vw' }}
                        onHide={() => setVisible(false)}
                    >
                        {/* Formulario */}
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="codigo_interno">Codigo interno</label>
                                <InputText
                                    id="codigo_interno"
                                    name="codigo_interno"
                                    value={formData.codigo_interno}
                                    onChange={handleChange}
                                    placeholder="Ingresa el codigo interno"
                                />
                            </div>

                            <div className="p-field">
                                <label htmlFor="descripcion">Descripcion del Producto</label>
                                <InputText
                                    id="descripcion"
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                    placeholder="Ingresa el nombre"
                                />
                            </div>

                            <div className="p-field">
                                <label htmlFor="cantidad">Cantidad</label>
                                <InputText
                                    id="cantidad"
                                    name="cantidad"
                                    value={formData.cantidad}
                                    onChange={handleChange}
                                    placeholder="Ingresa el Cantidad"
                                />
                            </div>

                            <div className="p-field">
                                <label htmlFor="precio">Precio</label>
                                <InputText
                                    id="precio"
                                    name="precio"
                                    value={formData.precio}
                                    onChange={handleChange}
                                    placeholder="Ingresa el precio"
                                />
                            </div>
                        </div>

                        {/* Botones del modal */}
                        <div>
                            <Button label="Cancelar" className="p-button-text" onClick={() => setVisible(false)} />
                            <Button label="Guardar" className="p-button-primary" onClick={handleSubmit} />
                        </div>
                    </Dialog>
                </div>

                <TableComponent data={productos} columns={productColumns} loading={loading} />
            </main>
        </div>
    );
}
