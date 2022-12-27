import st from "./cardAct.module.css";
import img1 from "./../../assets/actividad_piloto/1.jpg";
// Esta es la card para mostrar imagen representativa de cierta actividad
function CardAct() {
  return (
    <div className={st.contenedor}>
      <div className={st.padre}>
        <div className={st.imagen}>
            <img src={img1} alt="" />
        </div>
        <div className={st.info}>
          <div className={st.titulo}>
            <h4>Titulo de Actividad</h4>
          </div>
          <div className={st.boton}>
            <button type="button" className="btn btn-primary">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAct;
