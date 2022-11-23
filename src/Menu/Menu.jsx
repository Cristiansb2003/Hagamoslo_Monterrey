import logoSVG from "./../assets/HM emblema.svg";
import st from "./menu.module.css";
function Menu() {
  return (
    <div className={st.contenedor_padre}>
      <div className={st.contenedor_hijo}>
        <div className={st.logo_contenedor}>
          <div className={st.logo}>
            <img src={logoSVG} alt="" />
          </div>
          <div className={st.logo_letras}>
            <span>Hagamoslo Monterrey</span>
          </div>
        </div>
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
