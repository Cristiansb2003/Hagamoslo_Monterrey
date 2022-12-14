import st from "./vision.module.css";
import img1 from "./../../assets/actividad_piloto/1.jpg";
function Vision() {
  return (
    <div className={st.contenedor_padre}>
      <div className={st.contenedor_hijo}>
        <div className={st.triangulo}>
          <img src={img1} alt="" />
        </div>
        <div className={st.mision}>
          <h2>Visión</h2>
          <div className={st.p_mision}>
            <br />
            <br />
            <p>
              En Hagámoslo Monterrey aspiramos a ser reconocidos por la gran
              mayoría de la juventud regiomontana como una oportunidad de
              aportar a la sociedad, siendo identificados por la comunidad
              nuevoleonense como una organización con alto impacto social y
              ambiental. Asimismo, Hagámoslo Monterrey tiene el vivo deseo de
              agotar y trascender el trabajo realizado en Monterrey para
              fomentar la creación de subdivisiones de Hagámoslo Monterrey que
              ejecuten las mismas labores en los demás municipios de la entidad,
              para así, algún día, migrar la organización a otros Estados del
              país. Para lograr los objetivos planteados por la organización,
              los miembros de Hagámoslo Monterrey están comprometidos con la
              esencia del proyecto, con ser perseverantes y responsables en la
              ejecución de las tareas, así como con lograr establecer vínculos
              de apoyo con instituciones que confíen en la organización y tengan
              la capacidad de apoyar la realización de las actividades. Además,
              Hagámoslo Monterrey sostiene el compromiso de estar siempre
              dirigido a la juventud regiomontana y del resto del país; no
              obstante, llegado el momento, la organización modificará sus
              espacios y actividades para integrar jóvenes de diversas edades,
              si es que quienes han acompañado el proyecto desde sus inicios
              desean continuar con las labores de servicio en su adultez.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Vision;
