import Tarjeta from '../Tarjeta/Tarjeta';
import estilos from './Main.module.css';

function Main() {
  return (
    <main className={estilos.contenido}>
      <h2>Sistema de Gestión de Hamburguesería</h2>
      <p>Plataforma para control de pedidos en mostrador, stock de insumos y comandas de cocina.</p>
      <h3>Módulos previstos</h3>
      <section className={estilos.modulos}>
        <Tarjeta titulo="Control de Pedidos" descripcion="Seguimiento de comandas en tiempo real." principal />
        <Tarjeta titulo="Stock e Insumos" descripcion="Control de medallones, panes y salsas." estado="En análisis" />
        <Tarjeta titulo="Usuarios y Permisos" descripcion="Roles para cajeros y cocineros." />
      </section>
    </main>
  );
}
export default Main;