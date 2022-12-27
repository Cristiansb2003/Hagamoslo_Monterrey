import Act1 from "./act/Act1";
import Act2 from "./act/Act2";
import Act3 from "./act/Act3";
import st from "./actividades.module.css";

// Este componente es para mostrar las tres actividades en el carrucel

function Actividades() {
  return (
    <div className={st.contenedor_padre}>
      <div className={st.contenedor_hijo}>
        <span>Actividades</span>
        <div className={st.actividades}>
          <Act1 />
          <Act2 />
          <Act3 />
        </div>
        <div className={st.boton}>
          <button type="button" className="btn btn-success">
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
}

export default Actividades;
