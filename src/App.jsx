import "./App.css";
import CardAct from "./components/cardAct/CardAct";
import GalActividades from "./pages/galActividades/galActividades";
import GalImg from "./pages/galImg/GalImg";
import act_2022 from "./assets/img/act-2022/act-2022";
import Imagenes from "./assets/img/act-2022/act-piloto/images";
import P from "./assets/img/act-2022/act-marzo/P";
function App() {
  return (
    <div>
      {/* {
        Imagenes.map((ima)=>(
          <img src={ima.img} key ={ima.pos}></img>
        ))
      } */}
      {/* <GalActividades/> */}
      {/* <P/> */}
      <GalImg/>
      {/* <div className="contenedor">
        <div className="padre">
          <div className="imagen"></div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
