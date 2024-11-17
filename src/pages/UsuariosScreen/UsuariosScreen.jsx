import { Dialog } from "primereact/dialog";
import { useState } from 'react';

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
        <div className='min-h-screen flex flex-column bg-dark-custom'>
            <header className="sticky top-0 z-11">
                <MenuComponent />
            </header>
            <main className="flex-1 pt-6 pr-4 pl-4 overflow-auto">
                <TableComponent data={users} columns={userColumns} customConfig={loading} />
                <div>
                    <Dialog
                        header="Añadir Usuario"
                        visible={isModalOpen}
                        onHide={closeModal}
                        style={{ width: '80vh' }}
                    >
                        <form>
                            <div className="p-field">
                                <input id="username" type="text" className="" placeholder="Nombre Completo" />
                            </div>
                            <div className="p-field">
                                <input id="email" type="email" className="" placeholder="Correo Electronico" />
                            </div>
                            <div className="p-field">
                                <select name="rol" id="rol">
                                    <option value=""></option>
                                    <option value="">Admin</option>
                                    <option value="">Usuario Comun</option>
                                    <option value="">Rol</option>

                                </select>
                            </div>
                            <button type="submit" className="p-button p-component absolute bottom-0 right-0 m-2">Guardar</button>
                        </form>
                    </Dialog>
                </div>
            </main>
            {/* <div className="h-2rem w-2rem absolute bottom-0 right-0 m-4 z-10 rounded"> */}
            <AddComponent onClick={openModal} />
            {/* </div> */}
        </div>
    );
}
