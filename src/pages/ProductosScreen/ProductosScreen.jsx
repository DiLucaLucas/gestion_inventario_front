import MenuComponent from "../../components/MenuComponent";
import TableComponent from "../../components/TableComponent";

export default function ProductosScreen() {
    return (
        <div className='min-h-screen flex flex-column bg-dark-custom'>
            <header className="sticky top-0 z-11">
                <MenuComponent />
            </header>
            <main className="flex-1 pt-6 pr-4 pl-4 overflow-auto">
                <TableComponent />
            </main>
        </div>
    );
}
