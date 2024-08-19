// Bu script fileda moviesni JS codelari yoziladi !
let elList = document.querySelector('.movies__list');
let genre = document.querySelector('.all__movies_genre');
let elShadow = document.querySelector('template').content;

let movies = films.slice(0, 50);
let genreArr = ['Comedy', 'Drama', 'Action', 'War', 'Fantasy', 'Adventure', 'Science Fiction', 'Thriller', 'Horror', "Animation", "Family", "Documentary", "Mystery", "TV Movie", "Music", "Crime",];

let randomGenre = genreArr[parseInt(Math.random() * genreArr.length)];
genre.textContent = randomGenre;

function handleRenderMovies(array) {
    let docFragment = document.createDocumentFragment();
    if (array.length) {
        array.forEach(function (item) {
            let clone = elShadow.cloneNode(true);
            let movie_title = clone.querySelector('.movie_title');
            let title = item.title.split(' ');
            if (title.length <= 2) { movie_title.textContent = title.join(', ') } else { movie_title.textContent = title.slice(0, 2).join(', ') + '. . .'; }
            let movie_photo = clone.querySelector('.movie_picture');
            movie_photo.src = item.poster;
            let randomNumber = (Math.random() * 10).toFixed(1);
            let rating_number = clone.querySelector('.rating_number');
            rating_number.textContent = randomNumber;
            let movie_genres = clone.querySelector('.movie__genres');
            let genres_movi = item.genres;
            if (genres_movi.length) {
                if (genres_movi.length > 3) { movie_genres.textContent = genres_movi.slice(0, 3).join(', ') + '. . .' } else { movie_genres.textContent = genres_movi.join(', '); }
            } else { movie_genres.textContent = 'Movi Genre Unknown' }
            let movies__descrip = clone.querySelector('.movies__descript');
            movies__descrip.textContent = item.overview;
            let movie__eyes_count = clone.querySelector('.movie__eyes_count');
            let random_eyes_count = Math.round(Math.random() * 1000);
            movie__eyes_count.textContent = random_eyes_count;
            let movi_year = clone.querySelector('.movie_year');
            let year_arr = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
            let random_year = year_arr[parseInt(Math.random() * year_arr.length)];
            movi_year.textContent = random_year;
            let time = clone.querySelector('.time');
            let minute = clone.querySelector('.minute');
            let time_arr = ['1', '2', '3'];
            let minute_arr = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
            let random_time = time_arr[parseInt(Math.random() * time_arr.length)];
            let random_minute = minute_arr[parseInt(Math.random() * minute_arr.length)];
            time.textContent = random_time;
            minute.textContent = random_minute;
            docFragment.append(clone);
        });
        elList.append(docFragment);
    };
};
handleRenderMovies(movies)


