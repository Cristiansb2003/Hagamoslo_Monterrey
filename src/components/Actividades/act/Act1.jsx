import st from "./act1.module.css";
import img1 from "./../../../assets/actividad_piloto/1.jpg";
import cinta from "./../../../assets/cinta.png";
function Act1() {
  return (
    <div className={st.contenedor_padre}>
      <div className={st.cinta}>
        <img src={cinta} alt="cinta" />
      </div>
      <div className={st.contenedor_hijo}>
        <h2>Actividad 1</h2>
        <div className={st.card}>
          <div className={st.con_img}>
            <img src={img1} alt="" />
          </div>
        </div>
        <button type="button" className="btn btn-success">Ver Más</button>
      </div>
    </div>
  );
}

export default Act1;
