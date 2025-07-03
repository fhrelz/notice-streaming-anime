document.addEventListener('DOMContentLoaded', () => {
    // =================================================================
    // DATA ANIME ANDA - LENGKAP
    // =================================================================
    const movies = [{
        id: 35,
        img: "img/2025(10Anime)/Kusuriya-no-Hitorigoto-Season-2(8.89,Drama,Fntasy,Historical).jpg",
        title: "Kusuriya no Hitorigoto S2",
        letter: "k",
        genre1: "drama",
        genre2: "fantasy",
        year: 2025,
        rate: 8.89,
        url: "404.html",
    }, {
        id: 34,
        img: "img/2025(10Anime)/Solo-Leveling-Season-2(8.71,Action,Adventure,Fantasy).png",
        title: "Solo Leveling Season 2",
        letter: "s",
        genre1: "action",
        genre2: "adventure",
        year: 2025,
        rate: 8.71,
        url: "404.html",
    }, {
        id: 33,
        img: "img/2025(10Anime)/Bang-Dream-Ave-Mujica(8.07,Drama,Music,Psychological).jpg",
        title: "Bang Dream Ave Mujica",
        letter: "b",
        genre1: "drama",
        year: 2025,
        rate: 8.07,
        url: "404.html",
    }, {
        id: 32,
        img: "img/2025(10Anime)/Fire-Force-Season-3(7.73,Action,Fantasy,Sci-Fi).jpg",
        title: "Fire Force Season 3",
        letter: "f",
        genre1: "action",
        year: 2025,
        rate: 7.73,
        url: "404.html",
    }, {
        id: 31,
        img: "img/2025(10Anime)/Hibi-Wa-Sugiredo-Meshi-Umashi(7.79,Comedy,Slice-of-Life).jpg",
        title: "Hibi Wa Sugiredo Meshi Umashi",
        letter: "h",
        genre1: "comedy",
        year: 2025,
        rate: 7.79,
        url: "hwsmu.html",
    }, {
        id: 30,
        img: "img/2025(10Anime)/Medalist(8.38,Drama,Psychological,Sports).jpg",
        title: "Medalist",
        letter: "m",
        genre1: "drama",
        year: 2025,
        rate: 8.38,
        url: "404.html",
    }, {
        id: 29,
        img: "img/2025(10Anime)/Summe-Pockets(7.31,Romance,Drama).png",
        title: "Summer Pockets",
        letter: "s",
        genre1: "romance",
        genre8: "drama",
        year: 2025,
        rate: 7.31,
        url: "404.html",
    }, {
        id: 28,
        img: "img/2025(10Anime)/Uma-musume-Cinderella-Grays(8.47,Drama,Sports).jpg",
        title: "Uma musume Cinderella Grays",
        letter: "u",
        genre1: "drama",
        year: 2025,
        rate: 8.47,
        url: "404.html",
    }, {
        id: 27,
        img: "img/2025(10Anime)/Witch-watch(7.45,Comedy,-Fantasy).jpg",
        title: "Witch watch",
        letter: "w",
        genre1: "comedy",
        year: 2025,
        rate: 7.45,
        url: "404.html",
    }, {
        id: 26,
        img: "img/2025(10Anime)/Zatsu-Tabi(6.95,Comedy,Adventure,Slice-of-Life).jpg",
        title: "Zatsu-Tabi",
        letter: "z",
        genre1: "comedy",
        genre3: "adventure",
        year: 2025,
        rate: 6.95,
        url: "404.html",
    }, {
        id: 25,
        img: "img/2024(10Anime)/Boku-no-Kokoro-Yabai-Yatsu-Season-2(8.74,Comedy,Romance,School).jpg",
        title: "Boku no Kokoro Yabai Yatsu S2",
        letter: "b",
        genre1: "comedy",
        year: 2024,
        rate: 8.74,
        url: "404.html",
    }, {
        id: 24,
        img: "img/2024(10Anime)/DANDADAN(8.50,Action,Comedy,Supernatural).jpg",
        title: "DANDADAN",
        letter: "d",
        genre1: "action",
        year: 2024,
        rate: 8.5,
        url: "404.html",
    }, {
        id: 23,
        img: "img/2024(10Anime)/Kaijuu-No.8(8.28,Action,Fantasy,Sci-Fi).jpg",
        title: "Kaijuu No.8",
        letter: "k",
        genre1: "action",
        year: 2024,
        rate: 8.28,
        url: "404.html",
    }, {
        id: 22,
        img: "img/2024(10Anime)/Kimetsu-no-Yaiba-Hashira-Geiko-Hen(8.09,Action,Fantasy,Supernatural,Shounen).png",
        title: "Kimetsu no Yaiba: Hashira Geiko",
        letter: "k",
        genre1: "action",
        year: 2024,
        rate: 8.09,
        url: "themanor.html",
    }, {
        id: 21,
        img: "img/2024(10Anime)/Konosuba-Season-3(8.35,Adventure,Comedy,Fantasy).jpg",
        title: "Konosuba Season 3",
        letter: "k",
        genre1: "comedy",
        year: 2024,
        rate: 8.35,
        url: "404.html",
    }, {
        id: 20,
        img: "img/2024(10Anime)/Make-Heroine-ga-Oosugiru!(8.12,Comedy,Romance,School).jpg",
        title: "Make Heroine ga Oosugiru!",
        letter: "m",
        genre1: "comedy",
        year: 2024,
        rate: 8.12,
        url: "404.html",
    }, {
        id: 19,
        img: "img/2024(10Anime)/Oshi-no-Ko-Season-2(8.56,Drama,Mystery).jpg",
        title: "Oshi no Ko Season 2",
        letter: "o",
        genre1: "drama",
        year: 2024,
        rate: 8.56,
        url: "404.html",
    }, {
        id: 18,
        img: "img/2024(10Anime)/Re-zero-Season-3(8.46,Drama,Fantasy,Thriller,Pshycological).jpg",
        title: "Re:zero Season 3",
        letter: "r",
        genre1: "drama",
        year: 2024,
        rate: 8.46,
        url: "404.html",
    }, {
        id: 17,
        img: "img/2024(10Anime)/Solo-Leveling(8.25,Action,Adventure).png",
        title: "Solo Leveling",
        letter: "s",
        genre1: "action",
        year: 2024,
        rate: 8.25,
        url: "404.html",
        upload: "latest",
    }, {
        id: 16,
        img: "img/2024(10Anime)/Tokidoki-Bosotto-Rusia(7.58,Comedy,Romance,School).jpg",
        title: "Tokidoki Bosotto Rusia",
        letter: "t",
        genre1: "comedy",
        year: 2024,
        rate: 7.58,
        url: "404.html",
    }, {
        id: 15,
        img: "img/2023(10Anime)/BOFURI-Season-2(7.22,Action,Comedy,Game).jpg",
        title: "BOFURI Season 2",
        letter: "b",
        genre1: "action",
        year: 2023,
        rate: 7.22,
        url: "404.html",
        upload: "latest",
    }, {
        id: 14,
        img: "img/2023(10Anime)/Jujutsu-Kaisen-S2(8.74,Action,Supernatural,Magic,Shounen).jpg",
        title: "Jujutsu Kaisen S2",
        letter: "j",
        genre1: "action",
        year: 2023,
        rate: 8.74,
        url: "404.html",
    }, {
        id: 13,
        img: "img/2023(10Anime)/Kimetsu-no-Yaiba-Black-Smith-Arc(8.18,Action,Supernatural,Shounen).png",
        title: "Kimetsu no Yaiba: Blacksmith Arc",
        letter: "k",
        genre1: "action",
        year: 2023,
        rate: 8.18,
        url: "404.html",
        upload: "latest",
    }, {
        id: 12,
        img: "img/2023(10Anime)/Kubo-san-wa-Mob(7.55,Comedy,Romance,School).jpg",
        title: "Kubo san wa Mob",
        letter: "k",
        genre1: "comedy",
        genre8: "drama",
        year: 2023,
        rate: 7.55,
        url: "404.html",
    }, {
        id: 11,
        img: "img/2023(10Anime)/Mushoku-Tensei-Season-2(8.22,Adventure,Drama,Fantasy).png",
        title: "Mushoku Tensei Season 2",
        letter: "m",
        genre1: "adventure",
        genre8: "drama",
        year: 2023,
        rate: 8.22,
        url: "404.html",
        upload: "latest",
    }, {
        id: 10,
        img: "img/2023(10Anime)/Oshi-no-Ko(8.57,Drama,Mystery).png",
        title: "Oshi no Ko",
        letter: "o",
        genre1: "drama",
        year: 2023,
        rate: 8.57,
        url: "404.html",
    }, {
        id: 9,
        img: "img/2023(10Anime)/Otonari-no-Tenshi(7.84,Comedy,Romance,Drama).png",
        title: "Otonari no Tenshi",
        letter: "o",
        genre1: "comedy",
        genre8: "drama",
        year: 2023,
        rate: 7.84,
        url: "404.html",
        upload: "latest",
    }, {
        id: 8,
        img: "img/2023(10Anime)/Sousou-no-Frieren(9.30,Magic,Adventure,Drama).jpg",
        title: "Sousou no Frieren",
        letter: "s",
        genre1: "adventure",
        genre8: "drama",
        year: 2023,
        rate: 9.3,
        url: "404.html",
    }, {
        id: 7,
        img: "img/2023(10Anime)/Tomo-chan-wa-Onnanoko!(7.74,Comedy,Romance,School).jpg",
        title: "Tomo-chan wa Onnanoko!",
        letter: "t",
        genre1: "comedy",
        genre8: "drama",
        year: 2023,
        rate: 7.74,
        url: "404.html",
        upload: "latest",
    }, {
        id: 6,
        img: "img/2023(10Anime)/Zom-100(7.74,Comedy,Survival,Adventure).png",
        title: "Zom 100",
        letter: "z",
        genre1: "comedy",
        genre2: "crime", // Assuming 'survival' could be crime
        year: 2023,
        rate: 7.74,
        url: "404.html",
    }, {
        id: 5,
        img: "img/2022(10Anime)/Blue-Lock (8.18,Sports).png",
        title: "Blue Lock",
        letter: "b",
        genre1: "drama",
        year: 2022,
        rate: 8.18,
        url: "404.html",
        upload: "latest",
    }, {
        id: 4,
        img: "img/2022(10Anime)/Chainsaw-Man(8.45,Action,Supernatural,Shounen).png",
        title: "Chainsaw Man",
        letter: "c",
        genre1: "action",
        year: 2022,
        rate: 8.45,
        url: "404.html",
    }, {
        id: 3,
        img: "img/2022(10Anime)/Classroom-of-the-Elite-Season-2(8.08,Drama,Pyhscological,School).png",
        title: "Classroom of the Elite S2",
        letter: "c",
        genre1: "drama",
        year: 2022,
        rate: 8.08,
        url: "404.html",
        upload: "latest",
    }, {
        id: 2,
        img: "img/2022(10Anime)/Kaguya-Sama-Season-3(8.98,Comedy,Romance,Physcological).png",
        title: "Kaguya-Sama Season 3",
        letter: "k",
        genre1: "comedy",
        year: 2022,
        rate: 8.98,
        url: "404.html",
    }, {
        id: 1,
        img: "img/2022(10Anime)/Kimetsu-no-Yaiba-Yuukaku-hen(8.72,Action,Supernatural,Shounen).jpg",
        title: "Kimetsu no Yaiba: Yuukaku-hen",
        letter: "k",
        genre1: "action",
        year: 2022,
        rate: 8.72,
        url: "404.html",
        upload: "latest",
    }, {
        id: 35,
        img: "img/2022(10Anime)/Komi-san-Season-2(8.00,Comedy,Romance,School).jpg",
        title: "Komi-san Season 2",
        letter: "k",
        genre1: "comedy",
        year: 2022,
        rate: 8.00,
        url: "the_gazi_attack.html",
    }, {
        id: 34,
        img: "img/2022(10Anime)/Lycoris-Recoil(8.15,Action,Drama,Comedy).jpg",
        title: "Lycoris Recoil",
        letter: "l",
        genre1: "action",
        genre8: "drama",
        year: 2022,
        rate: 8.15,
        url: "404.html",
    }, {
        id: 33,
        img: "img/2022(10Anime)/Shingeki-no-Kyojin-Final-Season-Part-2(8.76,Drama,Action,Historical,Military).jpg",
        title: "Shingeki no Kyojin Final S2",
        letter: "s",
        genre1: "action",
        genre8: "drama",
        year: 2022,
        rate: 8.76,
        url: "404.html",
    }, {
        id: 32,
        img: "img/2022(10Anime)/SPY-X-Family-Part2(8.22,Drama,Comedy,Action).jpg",
        title: "SPY X Family Part 2",
        letter: "s",
        genre1: "action",
        genre8: "drama",
        year: 2022,
        rate: 8.22,
        url: "404.html",
    }, {
        id: 31,
        img: "img/2022(10Anime)/SPYXFamily(8.46,Drama,Comedy,Action).jpg",
        title: "SPY X Family",
        letter: "s",
        genre1: "action",
        genre8: "drama",
        year: 2022,
        rate: 8.46,
        url: "themanor.html",
    }, {
        id: 30,
        img: "img/2021(10Anime)/Eighty-Six(8.33,Action,Drama,Sci-Fi).jpg",
        title: "86 - Eighty-Six",
        letter: "e",
        genre1: "action",
        genre8: "drama",
        year: 2021,
        rate: 8.33,
        url: "404.html",
    }, {
        id: 29,
        img: "img/2021(10Anime)/Go-toubun-no-Hanayome-Season-2(8.01,Comedy,Harem,Romance,School).png",
        title: "Go-toubun no Hanayome S2",
        letter: "g",
        genre1: "comedy",
        year: 2021,
        rate: 8.01,
        url: "404.html",
    }, {
        id: 28,
        img: "img/2021(10Anime)/HIGEHIRO(7.27,Drama,Romance).jpg",
        title: "Higehiro",
        letter: "h",
        genre1: "drama",
        year: 2021,
        rate: 7.27,
        url: "404.html",
    }, {
        id: 27,
        img: "img/2021(10Anime)/Horimiya(8.19,Comedy,Romance,School).jpg",
        title: "Horimiya",
        letter: "h",
        genre1: "comedy",
        year: 2021,
        rate: 8.19,
        url: "404.html",
    }, {
        id: 26,
        img: "img/2021(10Anime)/Kimetsu-no-Yaiba-Mugen-Ressha-sen(8.35,Action,Supernatural,Shounen).jpg",
        title: "Kimetsu no Yaiba: Mugen Train",
        letter: "k",
        genre1: "action",
        year: 2021,
        rate: 8.35,
        url: "404.html",
    }, {
        id: 25,
        img: "img/2021(10Anime)/Komi-san(7.82,Comedy,School,Romance,Shounen).png",
        title: "Komi Can't Communicate",
        letter: "k",
        genre1: "comedy",
        year: 2021,
        rate: 7.82,
        url: "404.html",
    }, {
        id: 24,
        img: "img/2021(10Anime)/Mushoku-Tensei(8.35,Adventure,Drama,Fantasy).jpg",
        title: "Mushoku Tensei",
        letter: "m",
        genre1: "adventure",
        genre8: "drama",
        year: 2021,
        rate: 8.35,
        url: "404.html",
    }, {
        id: 23,
        img: "img/2021(10Anime)/SNK-Final-Season(8.78,Action,Military,Historical).jpg",
        title: "Shingeki no Kyojin Final S1",
        letter: "s",
        genre1: "action",
        year: 2021,
        rate: 8.78,
        url: "404.html",
    }, {
        id: 22,
        img: "img/2021(10Anime)/Tensura-Season-2(8.35,Comedy,Action,Fantasy).jpg",
        title: "Tensura Season 2",
        letter: "t",
        genre1: "action",
        year: 2021,
        rate: 8.35,
        url: "404.html",
    }, {
        id: 21,
        img: "img/2021(10Anime)/Tokyo-Revengers(7.85,Action,Drama,Martial-Arts).jpg",
        title: "Tokyo Revengers",
        letter: "t",
        genre1: "action",
        genre8: "drama",
        year: 2021,
        rate: 7.85,
        url: "404.html",
    }, {
        id: 20,
        img: "img/2020(10Anime)/BOFURI(7.50,Action,Adventure,Comedy,Game).png",
        title: "BOFURI",
        letter: "b",
        genre1: "action",
        year: 2020,
        rate: 7.5,
        url: "404.html",
    }, {
        id: 19,
        img: "img/2020(10Anime)/Fruits-Basket-Season-2(8.53,Comedy,Romance,Drama).jpg",
        title: "Fruits Basket Season 2",
        letter: "f",
        genre1: "comedy",
        genre8: "drama",
        year: 2020,
        rate: 8.53,
        url: "404.html",
    }, {
        id: 18,
        img: "img/2020(10Anime)/Fugou-Keiji(7.51,Action,Comedy,Mystery).png",
        title: "Fugou Keiji",
        letter: "f",
        genre1: "action",
        year: 2020,
        rate: 7.51,
        url: "404.html",
    }, {
        id: 17,
        img: "img/2020(10Anime)/Haikyuu-To-the-TOP(8.37,Shounen,Sport,School).png",
        title: "Haikyuu!! To the TOP",
        letter: "h",
        genre1: "drama",
        year: 2020,
        rate: 8.37,
        url: "404.html",
        upload: "latest",
    }, {
        id: 16,
        img: "img/2020(10Anime)/Jujutsu-Kaisen(8.55,Action,Drama,Shounen).jpg",
        title: "Jujutsu Kaisen",
        letter: "j",
        genre1: "action",
        genre8: "drama",
        year: 2020,
        rate: 8.55,
        url: "404.html",
    }, {
        id: 15,
        img: "img/2020(10Anime)/Kaguya-sama-Season-2(8.62,Comedy,Romance,School,Pshycological).jpg",
        title: "Kaguya-sama Season 2",
        letter: "k",
        genre1: "comedy",
        year: 2020,
        rate: 8.62,
        url: "404.html",
        upload: "latest",
    }, {
        id: 14,
        img: "img/2020(10Anime)/Kanokari(6.90,Comedy,Romance,Harem).jpg",
        title: "Kanojo, Okarishimasu",
        letter: "k",
        genre1: "comedy",
        year: 2020,
        rate: 6.9,
        url: "404.html",
    }, {
        id: 13,
        img: "img/2020(10Anime)/Oregairu-S3(8.35,Comedy,Drama,Romance,School).png",
        title: "Oregairu Season 3",
        letter: "o",
        genre1: "comedy",
        genre8: "drama",
        year: 2020,
        rate: 8.35,
        url: "404.html",
        upload: "latest",
    }, {
        id: 12,
        img: "img/2020(10Anime)/Re-Zero-Season-2(8.33,Action,Adventure,Thriller).jpg",
        title: "Re:Zero Season 2",
        letter: "r",
        genre1: "action",
        year: 2020,
        rate: 8.33,
        url: "404.html",
    }, {
        id: 11,
        img: "img/2020(10Anime)/Toaru-Kagaku-no-Railgun-T(8.14,Action,Sci-Fi,School).jpg",
        title: "Toaru Kagaku no Railgun T",
        letter: "t",
        genre1: "action",
        year: 2020,
        rate: 8.14,
        url: "404.html",
        upload: "latest",
    }];

    // DATA UNTUK HEADER SLIDER
    const sliderData = [{
        background: "url('img/tff.jpg') no-repeat center center/cover",
        duration: "24min",
        genre: '<i class="fas fa-star"></i>8.83 <span>Drama / Romance</span>',
        title: "Kaoru Hana wa Rin to Saku",
        description: "Suatu hari di tempat kerja, Rintarou melihat seorang pelanggan di sebuah meja, tetapi pelanggan itu pergi sebelum dia sempat berbicara dengannya...",
    }, {
        background: "url('img/kny.jpg') no-repeat center center/cover",
        duration: "Unknown",
        genre: '<i class="fas fa-star"></i>8.72 <span>Action / Supernatural</span>',
        title: "Kimetsu No Yaiba Infinity Castle",
        description: "Setelah melalui berbagai pertempuran sengit dan pelatihan intensif bersama para Hashira, Tanjiro dan kawan-kawan akhirnya siap menghadapi ancaman terbesar mereka...",
    }, {
        background: "url('img/kaijuno8 2.jpeg') no-repeat center center/cover",
        duration: "2h 10min",
        genre: '<i class="fas fa-star"></i>9.2 <span>Comedy / Action / Drama</span>',
        title: "KAIJU NO.8 Season 2",
        description: "Setelah kehancuran kampung halaman mereka, teman masa kecil Kafka Hibino dan Mina Ashiro membuat perjanjian untuk menjadi perwira di Pasukan Pertahanan...",
    }];

    // DATA UNTUK VIDEO PLAYLIST
    const videoPlaylist = [
        {
            videoSrc: 'vid/The_Fragrant_Flower_Blooms_With_Dignity___Official_Trailer___Netflix(1080p).mp4',
            title: 'The Fragrant Flower Blooms With Dignity | Official Trailer'
        },
        {
            videoSrc: 'vid/Demon_Slayer__Kimetsu_no_Yaiba_Infinity_Castle___MAIN_TRAILER(1080p).mp4',
            title: 'Demon Slayer: Infinity Castle Arc | Main Trailer'
        },
        {
            videoSrc: 'vid/Kaijuu no-8 Season2｜7月19日より毎週土曜23_00～放送･配信開始(1080p).mp4',
            title: 'KAIJU NO.8 Season 2 Official Trailer'
        }
    ];

    // === DOM Elements ===
    const movieGrid = document.getElementById('movie-grid');
    const filterControls = document.getElementById('filter-controls');
    const rateFilter = document.getElementById('rate_filter');
    const rateValue = document.getElementById('rate_value');
    const searchInput = document.getElementById('search_input');
    const searchIcon = document.getElementById('search_icon');
    const searchResultsContainer = document.querySelector('.search_results');
    const headerEl = document.querySelector('header');
    const headerContentEl = document.getElementById('header_content');
    const sliderDotsContainer = document.getElementById('slider_dots');
    const video = document.getElementById('video');
    const playPauseBtn = document.getElementById('play_pause_btn');
    const startTimeElem = document.getElementById('start_time');
    const endTimeElem = document.getElementById('end_time');
    const seekBar = document.getElementById('seek_bar');
    const seekProgress = document.getElementById('seek_progress');
    const seekDot = document.getElementById('seek_dot');
    const volBar = document.getElementById('vol_bar');
    const volIcon = document.getElementById('vol_icon');
    const fullscreenBtn = document.getElementById('fullscreen_btn');
    const popularCarousel = document.getElementById('popular-carousel');
    const recommendedCarousel = document.getElementById('recommended-carousel');
    const videoTitle = document.querySelector('.title_video');
    const videoThumbnails = document.querySelectorAll('.video_thumb');

    let activeFilter = 'all';
    let currentSlide = 0;

    // === Functions ===

    const createMovieCard = (movie) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <a href="${movie.url || '#'}">
                <img src="${movie.img}" alt="${movie.title}" loading="lazy">
                <div class="content">
                    <h5>${movie.title}</h5>
                    <h6>
                        <span>${movie.year}</span>
                        <div class="rate">
                            <i class="fas fa-star"></i>
                            ${movie.rate}
                        </div>
                    </h6>
                </div>
            </a>`;
        return card;
    };
    
    const renderCarousel = (container, data) => {
        if (!container) return;
        container.innerHTML = '';
        data.forEach(movie => {
            container.appendChild(createMovieCard(movie));
        });
    };
    
    const applyAndRenderFilters = () => {
        const rating = parseFloat(rateFilter.value);
        let filteredMovies = movies;

        if (activeFilter !== 'all') {
            if (activeFilter === 'latest') {
                filteredMovies = movies.filter(m => m.upload === 'latest');
            } else if (!isNaN(parseInt(activeFilter))) {
                filteredMovies = movies.filter(m => m.year == activeFilter);
            } else {
                filteredMovies = movies.filter(m =>
                    (m.genre1 && m.genre1.toLowerCase() === activeFilter) ||
                    (m.genre2 && m.genre2.toLowerCase() === activeFilter) ||
                    (m.genre8 && m.genre8.toLowerCase() === activeFilter)
                );
            }
        }

        filteredMovies = filteredMovies.filter(m => m.rate >= rating);

        movieGrid.innerHTML = '';
        if (filteredMovies.length === 0) {
            movieGrid.innerHTML = '<p style="color: #fff; grid-column: 1 / -1; text-align: center;">Tidak ada hasil yang cocok.</p>';
        } else {
            filteredMovies.forEach(movie => {
                movieGrid.appendChild(createMovieCard(movie));
            });
        }
    };

    const setupCarouselScroll = (carouselId, leftBtnId, rightBtnId) => {
        const carousel = document.getElementById(carouselId);
        const leftBtn = document.getElementById(leftBtnId);
        const rightBtn = document.getElementById(rightBtnId);

        if (carousel && leftBtn && rightBtn) {
            const scrollAmount = carousel.clientWidth * 0.8;
            leftBtn.addEventListener('click', () => {
                carousel.scrollLeft -= scrollAmount;
            });
            rightBtn.addEventListener('click', () => {
                carousel.scrollLeft += scrollAmount;
            });
        }
    };

    const updateHeaderSlider = (slideIndex) => {
        const slide = sliderData[slideIndex];
        headerEl.style.background = slide.background;
        headerContentEl.innerHTML = `
            <h6>Duration: <span>${slide.duration}</span></h6>
            <h3>${slide.genre}</h3>
            <h1>${slide.title}</h1>
            <p>${slide.description}</p>
            <div class="btns">
                <a href="#video_section"><button class="btn-play"><i class="fas fa-play"></i> TONTON</button></a>
                <button class="btn-add"><i class="fas fa-plus"></i> ADD LIST</button>
            </div>
        `;
        document.querySelectorAll('.slider-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    };

    const formatTime = (timeInSeconds) => {
        if (isNaN(timeInSeconds)) return "00:00";
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    // === Event Listeners ===

    filterControls.addEventListener('click', (e) => {
        const target = e.target;
        if (target.matches('button[data-filter]') || target.matches('li[data-filter]')) {
            filterControls.querySelector('.cato_button_active')?.classList.remove('cato_button_active');
            target.classList.add('cato_button_active');
            activeFilter = target.dataset.filter;
            applyAndRenderFilters();
        }
    });

    rateFilter.addEventListener('input', () => {
        rateValue.textContent = `${rateFilter.value}+`;
        applyAndRenderFilters();
    });

    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        searchInput.focus();
    });

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toUpperCase();
        searchResultsContainer.classList.toggle('visible', filter.length > 0);
        if (filter.length === 0) return;

        const filtered = movies.filter(m => m.title.toUpperCase().includes(filter));
        searchResultsContainer.innerHTML = '';
        filtered.slice(0, 8).forEach(movie => {
            const resultEl = document.createElement('a');
            resultEl.href = movie.url || '#';
            resultEl.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <div class="content2">
                    <h6>${movie.title}</h6>
                    <p>${movie.year}</p>
                </div>`;
            searchResultsContainer.appendChild(resultEl);
        });
    });

    playPauseBtn.addEventListener('click', () => {
        video[video.paused ? 'play' : 'pause']();
    });

    video.addEventListener('play', () => {
        playPauseBtn.classList.remove('bi-play-fill');
        playPauseBtn.classList.add('bi-pause-fill');
    });

    video.addEventListener('pause', () => {
        playPauseBtn.classList.remove('bi-pause-fill');
        playPauseBtn.classList.add('bi-play-fill');
    });

    video.addEventListener('timeupdate', () => {
        const { currentTime, duration } = video;
        if (isNaN(duration)) return;
        const progressPercent = (currentTime / duration) * 100;
        seekBar.value = progressPercent;
        seekProgress.style.width = `${progressPercent}%`;
        seekDot.style.left = `${progressPercent}%`;
        startTimeElem.textContent = formatTime(currentTime);
        endTimeElem.textContent = formatTime(duration - currentTime);
    });

    video.addEventListener('loadedmetadata', () => endTimeElem.textContent = formatTime(video.duration));

    seekBar.addEventListener('input', () => {
        if (!isNaN(video.duration)) {
            video.currentTime = (seekBar.value * video.duration) / 100;
        }
    });

    volBar.addEventListener('input', () => {
        video.volume = volBar.value / 100;
        volIcon.className = 'bi';
        if (video.volume == 0) volIcon.classList.add('bi-volume-off-fill');
        else if (video.volume <= 0.5) volIcon.classList.add('bi-volume-down-fill');
        else volIcon.classList.add('bi-volume-up-fill');
    });

    fullscreenBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            video.requestFullscreen().catch(err => alert(`Error: ${err.message}`));
        }
    });

    videoThumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            if (videoPlaylist[index]) {
                const selectedVideo = videoPlaylist[index];
                video.src = selectedVideo.videoSrc;
                videoTitle.textContent = selectedVideo.title;
                video.play();
            }
        });
    });


    // === Initializations ===

    // Slider Header
    sliderData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateHeaderSlider(currentSlide);
        });
        sliderDotsContainer.appendChild(dot);
    });
    setInterval(() => {
        currentSlide = (currentSlide + 1) % sliderData.length;
        updateHeaderSlider(currentSlide);
    }, 8000);
    updateHeaderSlider(0);

    // Most Popular & Recommended Carousels
    const mostPopularAnime = [...movies].sort((a, b) => b.rate - a.rate).slice(0, 20);
    renderCarousel(popularCarousel, mostPopularAnime);

    const recommendedAnime = [...movies].sort((a, b) => b.year - a.year).slice(0, 20);
    renderCarousel(recommendedCarousel, recommendedAnime);

    setupCarouselScroll('popular-carousel', 'popular-scroll-left', 'popular-scroll-right');
    setupCarouselScroll('recommended-carousel', 'recommended-scroll-left', 'recommended-scroll-right');

    // Initial Movie Grid Render
    applyAndRenderFilters();
});