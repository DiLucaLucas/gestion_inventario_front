/* eslint-disable react/prop-types */
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function ModalComponent({ visible, onHide, formData, onChange, onSubmit }) {

    return (
        <Dialog
            header="Agregar Producto"
            visible={visible}
            style={{ width: '30vw' }}
            onHide={onHide}
        >
            {/* Formulario */}
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="codigo_interno">Código Interno</label>
                    <InputText
                        id="codigo_interno"
                        name="codigo_interno"
                        value={formData.codigo_interno}
                        onChange={onChange}
                        placeholder="Ingresa el código interno"
                    />
                </div>

                <div className="p-field">
                    <label htmlFor="descripcion">Descripción del Producto</label>
                    <InputText
                        id="descripcion"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={onChange}
                        placeholder="Ingresa el nombre"
                    />
                </div>

                <div className="p-field">
                    <label htmlFor="cantidad">Cantidad</label>
                    <InputText
                        id="cantidad"
                        name="cantidad"
                        value={formData.cantidad}
                        onChange={onChange}
                        placeholder="Ingresa la cantidad"
                    />
                </div>

                <div className="p-field">
                    <label htmlFor="precio">Precio</label>
                    <InputText
                        id="precio"
                        name="precio"
                        value={formData.precio}
                        onChange={onChange}
                        placeholder="Ingresa el precio"
                    />
                </div>
            </div>

            {/* Botones del modal */}
            <div>
                <Button label="Cancelar" className="p-button-text" onClick={onHide} />
                <Button label="Guardar" className="p-button-primary" onClick={onSubmit} />
            </div>
        </Dialog>
    );
};