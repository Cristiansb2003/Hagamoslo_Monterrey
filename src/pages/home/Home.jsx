import Cabecera from "../../components/cabecera/Cabecera";
import CarAct from "../../components/carrAct/CarAct";
import Mision from "../../components/mision/Mision";
import PiePagina from "../../components/piePagina/piePagina";
import Vision from "../../components/vision/Vision";

function Home() {
  return (
    <div>
      <Cabecera />
      <Mision />
      <Vision />
      <CarAct />
    </div>
  );
}
export default Home