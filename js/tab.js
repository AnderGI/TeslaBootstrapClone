const tabButtons = [...document.querySelectorAll("button.tabBtn")];
tabButtons.forEach((btn, index, list) => {
  btn.addEventListener("click", (event) => {
    if (!btn.classList.contains("active")) {
      const nextBtn = index === 0 ? 0 : 1;
      list[nextBtn].classList.remove("active");
      btn.classList.add("active");
      const controls = event.target.attributes["aria-controls"].value;
      const elementDiv = document.getElementById(controls);
      const nextId = elementDiv === "home" ? "profile" : "home";
      if (!elementDiv.classList.contains(...["show", "active"])) {
        document.getElementById(nextId).classList.remove(...["show", "active"]);
        document.getElementById(nextId).replaceChildren();
        elementDiv.classList.add(...["show", "active"]);
      }
    }
  });
});
