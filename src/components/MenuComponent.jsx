import { useState } from 'react';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';


export default function MinimalSidebar() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="btn-custom-success h-2rem w-2rem absolute top-0 right-0 m-2 z-10" />
            <Sidebar className='btn-success-custom' visible={visible} onHide={() => setVisible(false)}>
                <div className="btn-success-custom">
                    <div className="p-4">
                        <ul className="list-none p-0 m-0">
                            {/* Enlace Home */}
                            <li className=''>
                                <a
                                    href="#"
                                    className="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                >
                                    <i className="pi pi-home mr-4"></i>
                                    <span className="font-medium">Inicio</span>
                                </a>
                            </li>
                            {/* Enlace Usuarios */}
                            <li>
                                <a
                                    href="#"
                                    className="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                >
                                    <i className="pi pi-users mr-4"></i>
                                    <span className="font-medium">Usuarios</span>
                                </a>
                            </li>
                            {/* Enlace Productos */}
                            <li>
                                <a
                                    href="#"
                                    className="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                >
                                    <i className="pi pi-box mr-4"></i>
                                    <span className="font-medium">Productos</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}    