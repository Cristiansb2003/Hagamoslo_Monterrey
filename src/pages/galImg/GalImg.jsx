import st from "./galImg.module.css"
import Imagenes from "../../assets/img/act-2022/act-piloto/images";
// Esta es una pagina para listar todas las actividades
function GalAct() {
  return (
    <div className={st.contenedor}>
      <div className={st.col}>
        {Imagenes.map((img, index) => (
          <div key={index} className={st.cuadro}>
            <img src={img.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default GalImg;