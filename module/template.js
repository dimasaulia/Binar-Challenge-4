class TEMPLATE {
  card(data) {
    const html = `
            <div class="col-12 col-lg-4">
                <div class="card">
                    <img src="assets/images/inova.png" class="" alt="Pilihan Mobil">
    
                    <div class="card-body">
                        <p class="mb-2"><strong>${data.tipe}</strong></p>
                        <h5 class="card-title fw-bolder mb-3"> Rp ${data.harga} / hari </h5>
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

module.exports = TEMPLATE;
