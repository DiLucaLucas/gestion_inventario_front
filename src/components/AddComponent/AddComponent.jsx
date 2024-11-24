import { Button } from 'primereact/button';

const AddComponent = ({ onClick }) => {
    return (
        <div className='m-4'>
            <Button
                label='Nuevo Usuario'
                icon='pi pi-plus'
                className="mb-2 add-rounded"
                onClick={onClick}
                style={{ fontSize: '1rem'}}
            />
        </div>
    );
};

export default AddComponent;
