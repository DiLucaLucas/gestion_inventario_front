import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const TableComponent = ({ data, columns, loading }) => {
    return (
        <div>
            <DataTable value={Array.isArray(data) ? data : []} loading={loading} paginator rows={10}>
                {columns.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} body={col.body}/>
                ))}
            </DataTable>
        </div>
    );
};

export default TableComponent;