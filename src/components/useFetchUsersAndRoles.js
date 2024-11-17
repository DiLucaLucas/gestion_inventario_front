import { useState, useEffect } from 'react';

export const useFetchUsersAndRoles = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsersAndRoles = async () => {
            try {
                // Peticiones simultáneas
                const [usersResponse, rolesResponse] = await Promise.all([
                    fetch('http://localhost:3001/api/usuarios'),
                    fetch('http://localhost:3001/api/roles'),
                ]);

                const usersData = await usersResponse.json();
                const rolesData = await rolesResponse.json();

                // Verificamos que ambas peticiones tengan éxito
                if (!usersData.ok || !rolesData.ok) {
                    throw new Error('Error al obtener datos de usuarios o roles');
                }

                // Mapa de roles basado en `idrol` y `descripcion`
                const rolesMap = rolesData.result.data.reduce((map, role) => {
                    map[role.idrol] = role.descripcion; // Extraemos `idrol` y `descripcion`
                    return map;
                }, {});

                // Enriquecemos los datos de usuarios con la descripción del rol
                const enrichedUsers = usersData.result.data.map((user) => ({
                    ...user,
                    rolDescripcion: rolesMap[user.idrol] || 'Sin rol asignado',
                }));

                setUsers(enrichedUsers);
            } catch (error) {
                console.error('Error fetching users or roles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsersAndRoles();
    }, []);

    return { users, loading };
};