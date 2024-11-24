import { Dialog } from "primereact/dialog";
import { useState } from 'react';
import { Button } from "primereact/button";

import MenuComponent from "../../components/MenuComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import AddComponent from "../../components/AddComponent/AddComponent"
import { useFetchUsersAndRoles } from "../../components/useFetchUsersAndRoles";



export default function UsuariosScreen() {
    const { users, loading } = useFetchUsersAndRoles();

    const userColumns = [
        { field: 'idusuario', header: 'ID' },
        { field: 'nombre_completo', header: 'Nombre' },
        { field: 'email', header: 'Email' },
        { field: 'rolDescripcion', header: 'Rol' },
    ];

    const [isModalOpen, setIsModelOpen] = useState(false);

    const openModal = () => setIsModelOpen(true);
    const closeModal = () => setIsModelOpen(false);

    return (
        <div className="min-h-screen flex flex-column bg-dark-custom">
            {/* Menú */}
            <header className="sticky top-0 z-11">
                <MenuComponent />
            </header>

            {/* Contenido principal */}
            <main className="flex-1 flex flex-column align-items-center justify-content-center p-4">
                {/* Botón de Nuevo Usuario */}
                <div className="w-full flex justify-content-start mb-4">
                    <AddComponent onClick={openModal} />
                </div>

                {/* Tabla centrada */}
                <div className="w-full max-w-5xl">
                    <TableComponent
                        data={users}
                        columns={userColumns}
                        customConfig={loading}
                    />
                </div>

                {/* Modal */}
                <Dialog
                    header="Añadir Usuario"
                    visible={isModalOpen}
                    onHide={closeModal}
                    style={{ width: '40vw' }}
                    className="custom-modal"
                >
                    <form>
                        <div className="p-fluid">
                            <div className="p-field mb-2">
                                <input
                                    id="username"
                                    type="text"
                                    className="input mt-4"
                                    placeholder="Nombre Completo"
                                />
                            </div>
                            <div className="p-field mb-2">
                                <input
                                    id="email"
                                    type="email"
                                    className="input"
                                    placeholder="Correo Electrónico"
                                />
                            </div>
                            <div className="p-field mb-4">
                                <select id="rol" className="input">
                                    <option value="">Selecciona un rol</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Usuario Común</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-content-end mt-4'>
                            <Button label='Cancelar' severity='danger'  className="mr-2" onClick={closeModal}/>
                            <Button label="Guardar" severity='info'/>
                        </div>
                    </form>
                </Dialog>
            </main>
        </div>
    );
}
