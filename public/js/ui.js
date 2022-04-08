const input_tipeDriver = document.querySelector("#tipe");
const inputOption_tipeDriver = document.querySelector("#tipe_driver--option");
const inputItem_tipeDriver = document.querySelectorAll(".input-item");

const input_waktu = document.querySelector("#waktu");
const inputOption_waktu = document.querySelector("#tipe_waktu--option");
const inputItem_waktu = document.querySelectorAll(".waktu-item");

const tipeDriver = ["Dengan Sopir", "Tanpa Sopir"];
const tipeWaktu = [
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "15:49:05",
];
const arr_icon = document.querySelector(".inp-arr");
const clock_icon = document.querySelector(".clock");

class UI {
  /**
   * @param {obj} input Form input yang digunakan
   * @param {obj} icon Input Icon yang digunakan sebagai toggle
   * @param {obj} option Form Option yang digunakan
   * @param {obj} data Data berupa input item
   * @param {Array} valid Validasi data
   */

  constructor({ input, icon, option, data, valid }) {
    this.showOption(input, icon, option);
    this.toggleOption(icon, option);
    this.getFormData(input, data, valid, option, icon);
  }

  close_option(icon, option) {
    option.classList.remove("form-active");
    icon.style.transform = "rotate(180deg)";
  }

  open_option(icon, option) {
    option.classList.add("form-active");
    icon.style.transform = "rotate(0deg)";
  }

  showOption(inp, icon, option) {
    inp.addEventListener("focusin", () => {
      this.open_option(icon, option);
    });
  }

  toggleOption(icon, option) {
    icon.addEventListener("click", () => {
      if (option.classList.contains("form-active")) {
        this.close_option(icon, option);
      } else {
        this.open_option(icon, option);
      }
    });
  }

  getFormData(inp, data, valid, option, icon) {
    data.forEach((e, i) => {
      e.addEventListener("click", () => {
        inp.value = valid[i];
        this.close_option(icon, option);
      });
    });
  }
}

const tipe_driver = new UI({
  input: input_tipeDriver,
  icon: arr_icon,
  option: inputOption_tipeDriver,
  data: inputItem_tipeDriver,
  valid: tipeDriver,
});

const waktu = new UI({
  input: input_waktu,
  icon: clock_icon,
  option: inputOption_waktu,
  data: inputItem_waktu,
  valid: tipeWaktu,
});
