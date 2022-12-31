import st from "./galImg.module.css";
import "./style.css"
import Imagenes from "../../assets/img/act-2022/act-piloto/images";
import { useState } from "react";
// Esta es una pagina para listar todas las actividades
function GalImg() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
    console.log(imgSrc)
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <div className="con">
        <img src={tempImgSrc} />
        </div>
      </div>
      <div className={st.contenedor}>
        <div className={st.col}>
          {Imagenes.map((img, index) => (
            <div
              key={index}
              onClick={() => getImg(img.img)}
              className={st.cuadro}
            >
              <img src={img.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default GalImg;
