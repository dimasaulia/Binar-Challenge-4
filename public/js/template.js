class TEMPLATE {
  card(data) {
    const html = `
        <div class="col-12 col-lg-4">
            <div class="card">
                <img src=${
                  data.foto || "assets/images/inova.png"
                } alt="Pilihan Mobil" class="rounded-3">

                <div class="card-body">
                    <p class="mb-2"><strong>${data.tipe}</strong></p>
                    <h5 class="card-title fw-bolder mb-3"> Rp ${
                      data.harga
                    } / hari </h5>
                    <p class="card-text mb-2">
                        ${data.desc}
                    </p>
                    <div class="mb-3">
                        <img src="assets/icons/icon_capacity.svg" class="d-inline me-2" alt="Ikon Kapasitas"
                            srcset="">
                        <p class="d-inline">${data.kapasitas} Orang</p>
                    </div>
                    <div class="mb-3">
                        <img src="assets/icons/icon_transmission.svg" class="d-inline me-2" alt="Ikon Kapasitas"
                            srcset="">
                        <p class="d-inline">${data.transmisi}</p>
                    </div>
                    <div class="mb-3">
                        <img src="assets/icons/icon_calender.png" class="d-inline me-2" alt="Ikon Kapasitas"
                            srcset="">
                        <p class="d-inline">${data.tahun}</p>
                    </div>
                    <a href="#" class="btn btn-submit d-block">Go somewhere</a>
                </div>
            </div>
        </div>
    `;

    return html;
  }

  empty() {
    const html = `<h2>Mohon Maaf Tidak Ada Data Yang Ditemukan</h2>`;
    return html;
  }
}

class RENDER extends TEMPLATE {
  renderCard(data) {
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

const render = new RENDER();

const validateNull = (form) => (form.value === "" ? false : true);
const validateValue = (form, value) => value.includes(form.value);

const driver = document.getElementById("tipe");
const tanggal = document.getElementById("tanggal");
const time = document.getElementById("waktu");
const penumpang = document.getElementById("jumlah");

const btn = document.getElementById("cari");
btn.addEventListener("click", () => {
  const valid = [
    validateNull(driver),
    validateNull(tanggal),
    validateNull(time),
    validateNull(penumpang),
    validateValue(time, tipeWaktu),
    validateValue(driver, tipeDriver),
  ];

  if (!valid.includes(false)) {
    fetch("http://localhost:8000/data")
      .then((result) => result.json())
      .then((output) => carFilter(output))
      .catch((err) => console.error(err));
  } else {
    alert("Harap Melengkapi Semua Form");
  }
});

const carFilter = (cars) => {
  const filterDate = new Date(`${tanggal.value}T${time.value}`);

  const filteredCar = cars.filter((car) => {
    if (
      new Date(car.availableAt).getTime() === filterDate.getTime() &&
      car.capacity >= Number(penumpang.value)
    ) {
      return car;
    }
  });

  if (filteredCar.length > 0) {
    render.renderNone();
    filteredCar.forEach((e) => {
      render.renderCard({
        tipe: e.type,
        foto: e.image,
        harga: e.rentPerDay,
        desc: e.description,
        kapasitas: e.capacity,
        transmisi: e.transmission,
        tahun: e.year,
      });
    });
  } else {
    render.renderNone();
    render.renderEmpty();
  }
};
