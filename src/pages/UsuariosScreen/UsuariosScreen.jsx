import { useEffect, useRef, useState } from 'react';
import { Button } from "primereact/button";

import { Toast } from 'primereact/toast';


import MenuComponent from "../../components/MenuComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import axios from "axios";

export default function UsuariosScreen() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState([true]);

    const toast = useRef(null);

    const [visible, setVisible] = useState(false);

    const [formData, setFormData] = useState({
        nombre_completo: '',
        email: '',
        rol: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);

            const payload = {
                nombre_completo: formData.nombre_completo,
                email: formData.email,
                password: formData.password,
                idrol: Number(formData.rol)
            }

            const response = await axios.post('http://localhost:3001/api/usuarios', payload);

            console.log('Datos enviados ✈️', payload);
            console.log(response.data);

            toast.current.show({
                severity: 'success',
                summary: 'Usuario creado con éxito',
                detail: 'El usuario ha sido creado con éxito'
            });

            setVisible(false);
            setFormData({
                nombre_completo: '',
                email: '',
                rol: '',
                password: '',
            });
        } catch (error) {
            console.error(error);

            toast.current.show({
                severity: 'error',
                summary: 'Error al crear usuario',
                detail: error.response.data.result.message
            });
        } finally {
            getUsuarios();
            setLoading(false);
        }
    }

    const getUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/usuarios');
            setUsuarios(response.data.result.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3001/api/usuarios/${id}`);
            setUsuarios((prevUsuario) => prevUsuario.filter((usuario) => usuario.idusuario !== id));

            toast.current.show({
                severity: 'success',
                summary: 'Usuario eliminado con éxito',
                detail: 'El usuario ha sido eliminado con éxito'
            });

        } catch (error) {
            console.error(error);
            toast.current.show({
                severity: 'error',
                summary: 'Error al eliminar usuario',
                detail: 'Ha ocurrido un error al eliminar el usuario'
            });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetch('http://localhost:3001/api/usuarios')
            .then((response) => response.json())
            .then((data) => {
                if (data.ok && Array.isArray(data.result.data)) {
                    setUsuarios(data.result.data);
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    }, []);

    const usuariosColumns = [
        { field: 'idusuario', header: 'ID' },
        { field: 'nombre_completo', header: 'Nombre', type: 'text' },
        { field: 'email', header: 'Email', type: 'email' },
        { field: 'rol', header: 'Rol', type: '' },
        { field: 'password', header: 'Contraseña', type: 'password' },
        {
            field: 'acciones',
            header: 'Acciones',
            body: (rowData) => (
                <Button
                    label="Eliminar"
                    icon="pi pi-trash"
                    className="p-button-danger p-button-sm"
                    onClick={() => handleDelete(rowData.idusuario)}
                />
            )
        }
    ];

    return (
        <div className="min-h-screen flex flex-column bg-dark-custom">
            <Toast ref={toast} />

            {/* Menú */}
            <header className="sticky top-0 z-5">
                <MenuComponent />
            </header>

            {/* Contenido principal */}
            <main className="flex-1 flex flex-column align-items-center p-4">
                {/* Botón de Nuevo Usuario */}
                <div className="w-full flex justify-content-start mb-4">
                    <Button
                        label="Nuevo Usuario"
                        icon="pi pi-plus"
                        onClick={() => setVisible(true)}
                        className="button-primary"
                    />
                </div>

                {/* Tabla centrada */}
                <div className="w-full max-w-5xl">
                    <TableComponent
                        data={usuarios}
                        columns={usuariosColumns}
                        customConfig={loading}
                    />
                </div>

                {/* Modal */}
                <ModalComponent
                    visible={visible}
                    onHide={() => setVisible(false)}
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    params={usuariosColumns}
                    title='Agregar Usuario'
                />
            </main>
        </div>
    );
}
