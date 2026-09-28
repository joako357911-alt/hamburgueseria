import logo from '../../assets/logo.png';
import estilos from './Navbar.module.css';

function Navbar() {
  return (
    <header className={estilos.barra}>
      <img src={logo} alt="Logo del sistema" className={estilos.logo} />
      <h1 className={estilos.titulo}>BurgerSys</h1>
      <nav className={estilos.menu}>
        <a href="#">Inicio</a>
        <a href="#">Módulos</a>
        <a href="#">Equipo</a>
      </nav>
    </header>
  );
}
export default Navbar;