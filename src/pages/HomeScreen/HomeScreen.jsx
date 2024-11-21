import MenuComponent from '../../components/MenuComponent';
import CardComponent from '../../components/shared/CardComponent';

const activities = [
  { productName: 'Frenos Shimano M6100', action: 'created', time: 'Hace 2 horas' },
  { productName: 'Cadena KMC Gold 12v', action: 'deleted', time: 'Hace 1 día' },
  { productName: 'Cubiertas Maxxis ikon 29 TR', action: 'deleted', time: 'Hace 1 día' },
  { productName: 'Bicicleta Giant Talon 3', action: 'deleted', time: 'Hace 1 día' },
];

const HomeScreen = () => {
    return (
        <div className='bg-gray-100 h-screen flex flex-column'>
          <div className='w-full'>
            <MenuComponent />
          </div>
            <div className='flex justify-content-center align-items-center flex-grow-1'>
              <CardComponent activities={activities}/>
            </div>
        </div>
    );
};

export default HomeScreen;
