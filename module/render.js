const TEMPLATE = require("./template");
const TMP = new TEMPLATE();
class RENDER extends TEMPLATE {
  renderCard(data) {
    console.log("its work");
    document
      .querySelector(".car-container")
      .insertAdjacentHTML("beforeend", this.card(data));
  }

  renderNone() {
    document.querySelector(".car-container").innerHTML = "";
  }

  renderEmpty() {
    document
      .querySelector(".car-container")
      .insertAdjacentHTML("beforeend", this.empty());
  }
}

module.exports = RENDER;
