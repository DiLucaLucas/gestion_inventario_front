import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom'; 
import 'primeflex/primeflex.css';

export default function MenuComponent() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/home'), 
        },
        {
            label: 'Usuarios',
            icon: 'pi pi-users',
            command: () => navigate('/usuarios'), 
        },
        {
            label: 'Productos',
            icon: 'pi pi-box',
            command: () => navigate('/productos'),
        }
    ];

    return (
        <div className="card">
            <Menubar model={items}/>
        </div>
    );
}
