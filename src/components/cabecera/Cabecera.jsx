import Menu from "../menu/Menu";
import img1 from "./../../assets/actividad_piloto/1.jpg";
import img2 from "./../../assets/actividad_piloto/2.jpg"
import st from "./cabecera.module.css";
function Cabecera() {
  return (
    <div className={st.contenedor}>
      <div className={st.menu}>
        <Menu />
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabecera;
