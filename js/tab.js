const tabButtons = [...document.querySelectorAll("button.tabBtn")];
const borderClasses = [
  "border",
  "border-left-0",
  "border-right-0",
  "border-top-0",
  "border-bottom-5",
  "border-dark",
];
tabButtons.forEach((btn, index, list) => {
  btn.addEventListener("click", (event) => {
    // Que solo ocurra en el btn que no esta activo
    if (!btn.classList.contains("active")) {
      // El indice del btn opuest
      const nextBtn = index === 0 ? 1 : 0;
      // Del que esta remueve la clase
      list[nextBtn].classList.remove("active", ...borderClasses);
      // añadesela al btn sobre el que se está clickando
      btn.classList.add("active", ...borderClasses);

      const controls = btn.attributes["aria-controls"].value;
      const elementDiv = document.getElementById(controls);
      const nextId = elementDiv.id === "home" ? "profile" : "home";
      if (!elementDiv.classList.contains(...["show", "active"])) {
        document.getElementById(nextId).classList.remove(...["show", "active"]);
        // document.getElementById(nextId).replaceChildren();
        elementDiv.classList.add(...["show", "active"]);
      }
    }
  });
});
