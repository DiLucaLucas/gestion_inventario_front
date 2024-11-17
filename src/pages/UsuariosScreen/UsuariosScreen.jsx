import MenuComponent from "../../components/MenuComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import { useFetchUsersAndRoles } from "../../components/useFetchUsersAndRoles";

export default function UsuariosScreen() {
    const { users, loading } = useFetchUsersAndRoles();

    const userColumns = [
        { field: 'idusuario', header: 'ID' },
        { field: 'nombre_completo', header: 'Nombre' },
        { field: 'email', header: 'Email' },
        { field: 'rolDescripcion', header: 'Rol'},
    ];

    return (
        <div className='min-h-screen flex flex-column bg-dark-custom'>
            <header className="sticky top-0 z-11">
                <MenuComponent />
            </header>
            <main className="flex-1 pt-6 pr-4 pl-4 overflow-auto">
                <TableComponent data={users} columns={userColumns} customConfig={loading} />
            </main>
        </div>
    );
}
