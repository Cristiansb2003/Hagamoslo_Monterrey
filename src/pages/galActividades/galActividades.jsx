import st from "./galActividades.module.css";
import Act from "../../assets/img/act-2022/act-2022";
import CardAct from "../../components/cardAct/CardAct";
// Esta es una pagina para listar todas las actividades
function GalActividades() {
  return (
    <div className={st.contenedor}>
      <div className={st.padre}>
        {Act.map((img) => {
            if(img.pos%2 == 0){
              return <CardAct color={true} key={img.pos} imagen={img} />
            }else{
              return <CardAct color={false} key={img.pos} imagen={img} />
            }
        })}
      </div>
    </div>
  );
}
export default GalActividades;
