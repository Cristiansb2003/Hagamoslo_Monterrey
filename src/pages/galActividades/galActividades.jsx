import st from "./galActividades.module.css";
import Act from "../../assets/img/act-2022/act-2022";
import CardAct from "../../components/cardAct/CardAct";
// Esta es una pagina para listar todas las actividades
function GalActividades() {
  return (
    <div className={st.contenedor}>
      <div className={st.col}>
        {Act.map((img) => {
          return (
              <CardAct key={img.pos} imagen={img} />
          );
        })}
      </div>
    </div>
  );
}
export default GalActividades;
