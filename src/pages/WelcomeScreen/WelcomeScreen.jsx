import { HeaderComponent } from "../../components/shared/HeaderComponent";
import { HeroComponent } from "../../components/shared/HeroComponent";
import { FooterComponent } from "../../components/shared/FooterComponent";
import "primeflex/primeflex.css";

export const WelcomeScreen = () => {
  return (
    <div className="flex flex-column h-screen">
      {/* Importamos el Header */}
      <HeaderComponent />
      
      {/* Importamos el Hero */}
      <HeroComponent />
      
      {/* Importamos el Footer */}
      <FooterComponent />
    </div>
  );
};

export default WelcomeScreen;
