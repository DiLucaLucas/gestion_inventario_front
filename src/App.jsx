import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "primeflex/primeflex.css";
import './index.css'

// Componentes de PrimeReact
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// Componentes
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";

function App() {
  return (
    // Contenedor principal que permite gestionar el enrutamiento
    <Router>
      {/* Routes: es el contenedor de las rutas de la app */}
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
