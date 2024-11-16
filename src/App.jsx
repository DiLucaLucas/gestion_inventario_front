// Elementos de React
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Estilos
import "primeflex/primeflex.css";
import "./index.css";

// Componentes de PrimeReact
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// Componentes
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import LoginScreen from "./pages/LoginScreen/Loginscreen";
import RegisterScreen from "./pages/RegisterScreen/RegisterScreen";
import HomeScreen from "./pages/HomeScreen/HomeScreen";

function App() {
  return (
    // Contenedor principal que permite gestionar el enrutamiento
    <Router>
      {/* Routes: es el contenedor de las rutas de la app */}
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
