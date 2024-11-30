/* eslint-disable react/prop-types */
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function ModalComponent({ visible, onHide, formData, onChange, onSubmit, params }) {

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
                {
                    params.map((param) => {
                        if (param.header !== 'Acciones' && !param.field.startsWith('id')) {
                            console.log(param)
                            return (
                                <div key={param.field} className="p-field">
                                    <InputText
                                        className='input'
                                        id={param.field}
                                        type={param.type}
                                        name={param.field}
                                        value={formData[param.field]}
                                        onChange={onChange}
                                        placeholder={`Ingresa el ${param.header}`}
                                    />
                                </div>
                            );
                        }
                        return null; // Si no cumple con la condición, devuelve null explícitamente
                    })
                }
            </div>

            {/* Botones del modal */}
            <div className='flex justify-content-end mt-4'>
                <Button label='Cancelar' severity='danger' className="mr-2" />
                <Button label="Guardar" severity='info' onClick={onSubmit} />
            </div>
        </Dialog>
    );
};