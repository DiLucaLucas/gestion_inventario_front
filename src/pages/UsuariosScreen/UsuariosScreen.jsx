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
