
// Film verileri
const filmler = [
    {
        id: 1,
        ad: "Inception",
        resim: "images/baslangic-2010.jpg",
        kategori: "Bilim Kurgu",
        sure: "148 dk",
        imdb: "8.8"
    },
    {
        id: 2,
        ad: "Karayip Korsanları",
        resim: "images/karayip-korsanlari-2003.jpg",
        kategori: "Macera",
        sure: "143 dk",
        imdb: "8.0"
    },
    {
        id: 3,
        ad: "V for Vendetta",
        resim: "images/v-for-vendetta-2006.jpg",
        kategori: "Aksiyon",
        sure: "132 dk",
        imdb: "8.2"
    },
    {
        id: 4,
        ad: "Interstellar",
        resim: "images/interstellar.jpg",
        kategori: "Bilim Kurgu",
        sure: "169 dk",
        imdb: "8.6"
    },
    {
        id: 5,
        ad: "The Godfather",
        resim: "images/the-godfather.jpg",
        kategori: "Suç",
        sure: "175 dk",
        imdb: "9.2"
    },
    {
        id: 6,
        ad: "Scarface",
        resim: "images/scarface.jpg",
        kategori: "Suç",
        sure: "170 dk",
        imdb: "8.3"
    },
    {
        id: 7,
        ad: "Batman Begins",
        resim: "images/batman-begins.jpg",
        kategori: "Aksiyon",
        sure: "140 dk",
        imdb: "8.2"
    },
    {
        id: 8,
        ad: "Top Gun",
        resim: "images/topgun.jpg",
        kategori: "Aksiyon",
        sure: "110 dk",
        imdb: "6.9"
    },
    {
        id: 9,
        ad: "LOTR: The Two Towers",
        resim: "images/lotr-two-towers.jpg",
        kategori: "Fantastik",
        sure: "179 dk",
        imdb: "8.8"
    }
];

const filmListesi = document.getElementById("film-listesi");
const filmArama = document.getElementById("filmArama");

// Film kartlarını oluştur
function filmleriGoster(filmArray) {
    filmListesi.innerHTML = "";
    filmArray.forEach(film => {
        const div = document.createElement("div");
        div.classList.add("col-md-4", "mb-4");
        div.innerHTML = `
            <div class="card bg-dark text-white h-100 border-danger shadow-lg">
                <img src="${film.resim}" class="card-img-top" alt="${film.ad}">
                <div class="card-body">
                    <h5 class="card-title">${film.ad}</h5>
                    <p class="card-text"><strong>Kategori:</strong> ${film.kategori}</p>
                    <p class="card-text"><strong>Süre:</strong> ${film.sure}</p>
                    <p class="card-text"><strong>IMDB:</strong> ${film.imdb}</p>
                    <button class="btn btn-danger" onclick="favorilereEkle(${film.id})">Favorilere Ekle</button>
                </div>
            </div>
        `;
        filmListesi.appendChild(div);
    });
}

function favorilereEkle(id) {
    let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
    if (!favoriler.includes(id)) {
        favoriler.push(id);
        localStorage.setItem("favoriler", JSON.stringify(favoriler));
        Swal.fire("Başarılı!", "Film favorilere eklendi!", "success");
    } else {
        Swal.fire("Zaten var!", "Bu film zaten favorilerde!", "info");
    }
}

if (filmListesi) filmleriGoster(filmler);

if (filmArama) {
    filmArama.addEventListener("input", function () {
        const aranan = filmArama.value.toLowerCase();
        const filtreli = filmler.filter(f => f.ad.toLowerCase().includes(aranan));
        filmleriGoster(filtreli);
    });
}

// Favori sayfasında listeleme
const favoriAlan = document.getElementById("favori-filmler");
if (favoriAlan) {
    let favoriler = JSON.parse(localStorage.getItem("favoriler")) || [];
    const favoriFilmler = filmler.filter(f => favoriler.includes(f.id));

    // Yeni alanı kullanarak kartları ekle
    favoriAlan.innerHTML = "";
    favoriFilmler.forEach(film => {
        const div = document.createElement("div");
        div.classList.add("col-md-4", "mb-4");
        div.innerHTML = `
            <div class="card bg-dark text-white h-100 border-danger shadow-lg">
                <img src="${film.resim}" class="card-img-top" alt="${film.ad}">
                <div class="card-body">
                    <h5 class="card-title">${film.ad}</h5>
                    <p class="card-text"><strong>Kategori:</strong> ${film.kategori}</p>
                    <p class="card-text"><strong>Süre:</strong> ${film.sure}</p>
                    <p class="card-text"><strong>IMDB:</strong> ${film.imdb}</p>
                </div>
            </div>
        `;
        favoriAlan.appendChild(div);
    });
}

