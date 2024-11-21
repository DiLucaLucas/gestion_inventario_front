export const FooterComponent = () => {
    return (
      <footer className="bg-almost-black text-primary-green py-4 font-bold text-center absolute bottom-0 w-full">
        <p className="mb-3 text-2xl">Desarrollado por Jeronimo Huincaman y Lucas Di Luca</p>
        <a
          href="https://github.com/DiLucaLucas/gestion_inventario_front.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg hover:text-primary-green transition-all"
        >
          <i className="pi pi-github" style={{ fontSize: "2.0rem" }}></i>
        </a>
      </footer>
    );
  };
  
  export default FooterComponent;
  