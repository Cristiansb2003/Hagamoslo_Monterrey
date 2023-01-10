
function P() {
  const fs = require("fs");
  const path = require("path");

  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif"];
  const isImage = (file) => {
    return imageExtensions.includes(path.extname(file).toLowerCase());
  };
  

  return (
    <div>
      <h3>Hola</h3>
    </div>
  );
}
export default P;
