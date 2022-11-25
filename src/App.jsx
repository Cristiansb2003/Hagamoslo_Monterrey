import Act1 from "./Actividades/act/Act1";
import Act2 from "./Actividades/act/Act2";
import Act3 from "./Actividades/act/Act3";
import Actividades from "./Actividades/Actividades";
import "./App.css";
import Cabecera from "./Cabecera/Cabecera";
import CarAct from "./CarAct/CarAct";
import Mision from "./Mision/Mision";
import Vision from "./Vision/Vision";
function App() {
  return (
    <div>
      <Cabecera />
      <CarAct />
      {/* <Act3/>
      <Act2/> */}
      {/* <Act1/> */}
      <Mision />
      <Vision />
    </div>
  );
}

export default App;
