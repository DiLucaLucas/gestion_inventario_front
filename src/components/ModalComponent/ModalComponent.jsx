/* eslint-disable react/prop-types */
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function ModalComponent({ visible, onHide, formData, onChange, onSubmit }) {

    return (
        <Dialog
            header="Agregar Producto"
            visible={visible}
            style={{ width: '50vw' }}
            onHide={onHide}
            className='custom-modal'
        >
            {/* Formulario */}
            <div className="p-fluid">
                <div className="p-field">
                    <InputText
                        className='input'
                        id="codigo_interno"
                        name="codigo_interno"
                        value={formData.codigo_interno}
                        onChange={onChange}
                        placeholder="Ingresa el código interno"
                    />
                </div>

                <div className="p-field">
                    <InputText
                        className='input'
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={onChange}
                        placeholder="Ingresa el nombre"
                    />
                </div>

                <div className="">
                    <InputText
                        className='input'
                        id="cantidad"
                        name="cantidad"
                        value={formData.cantidad}
                        onChange={onChange}
                        placeholder="Ingresa la cantidad"
                    />
                </div>

                <div className="p-field">
                    <InputText
                        className='input'
                        id="precio"
                        name="precio"
                        value={formData.precio}
                        onChange={onChange}
                        placeholder="Ingresa el precio"
                    />
                </div>
            </div>

            {/* Botones del modal */}
            <div className='flex justify-content-end mt-4'>
                <Button label='Cancelar' severity='danger' className="mr-2"/>
                <Button label="Guardar" severity='info'  onClick={onSubmit} />
            </div>
        </Dialog>
    );
};