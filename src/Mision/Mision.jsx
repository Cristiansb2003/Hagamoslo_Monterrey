import st from "./mision.module.css";
import img1 from './../assets/actividad_piloto/1.jpg';
function Mision() {
  return (
    <div className={st.contenedor_padre}>
      <div className={st.contenedor_hijo}>
        <div className={st.mision}>
          <h2>Mision</h2>
          <div className={st.p_mision}>
            <br /><br />
            <p>
              Hagámoslo Monterrey es una organización sin fines de lucro
              dedicada a planear y ejecutar proyectos de servicio social, que
              nace de la necesidad de actuar, de hacer, y de trascender a la
              práctica las buenas intenciones o preocupaciones de mejorar
              nuestra sociedad; esto a través de actividades enfocadas en la
              limpia de áreas verdes, la reparación o restauración de zonas y
              parques públicos, la recolección de donativos de víveres o demás
              objetos que beneficien a un sector vulnerable de la comunidad, y
              la atención a instituciones o centros de acogida con diferentes
              fines. Principalmente, la organización tiene el objetivo de
              invitar y convocar a jóvenes en el Estado de Nuevo León a
              participar en proyectos o labores de servicio social que puedan
              ayudar a su comunidad y mejorar su entorno, fomentar la
              integración, y formar vínculos con más jóvenes preocupados y
              deseosos por contribuir al beneficio de su sociedad. Hagámoslo
              Monterrey busca diferenciarse de otros proyectos de servicio
              social por medio de la búsqueda de una mayor pluralidad de
              participantes en sus convocatorias, pues, además, la organización
              aspira a ser una plataforma para que los asistentes a los eventos
              conozcan más personas y se promueva la integración y comunicación
              entre las diferentes esferas de la sociedad.
            </p>
          </div>
        </div>
        <div className={st.triangulo}>
            <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Mision;
