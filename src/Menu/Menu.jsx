import logo from "./../assets/HM_emblema.png";
import st from "./menu.module.css";
function Menu() {
  return (
    <div className={st.contenedor_padre}>
      <div className={st.contenedor_hijo}>
        <div className={st.logo}><img src={logo} alt="" /></div>
        <nav>
          <ul>
            <li className={st.ini}>Inicio</li>
            <li>Nosotros</li>
            <li>Actividades</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
