import Act1 from "./act/Act1";
import st from "./actividades.module.css";

function Actividades() {
  return (
    <div className={st.contenedor_padre}>
      <div className={st.contenedor_hijo}>
        <h2>Actividades</h2>
        <div className={st.actividades}>
            <div className={st.act1}>
                <Act1/>
            </div>
            <div className={st.act2}></div>
            <div className={st.act3}></div>
        </div>
      </div>
    </div>
  );
}

export default Actividades;
