import st from "./cardAct.module.css";
// Esta es la card para mostrar imagen representativa de cierta actividad
function CardAct(props) {
  return (
    <div className={st.contenedor}>
      <div className={st.padre}>
        <div className={st.imagen}>
            <img src={props.imagen.img} alt="" />
        </div>
        <div className={st.info}>
          <div className={st.titulo}>
            <h4>{props.imagen.nombre}</h4>
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
