import { Button } from 'primereact/button';

const AddComponent = ({ onClick }) => {
    return (
        <div className='absolute bottom-0 right-0 m-4'>
            <Button
                icon='pi pi-plus'
                className="add-rounded btn-success-custom"
                onClick={onClick}
                style={{ fontSize: '2.5rem'}}
            />
        </div>
    );
};

export default AddComponent;
