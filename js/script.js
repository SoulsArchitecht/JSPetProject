
'use strict';



const personalMovieDb = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    
        while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
            personalMovieDb.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }    
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const firstQuestion = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  secondQuestion = prompt('На сколько оцените его?', '');
        
            if  (firstQuestion != null && secondQuestion != null && firstQuestion != '' &&
                 secondQuestion != '' && firstQuestion.length < 50) {
                    personalMovieDb.movies[firstQuestion] = secondQuestion;
                    console.log('Done!');
                } else {
                    console.log('error');
                    i--;
                }
                     
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDb.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log('Вы - классический зритель');
        } else if (personalMovieDb.count >= 30) {
            console.log('Вы - киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDb);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDb.private) {
            personalMovieDb.private = false;
        } else {
            personalMovieDb.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDb.genres[i - 1] = genre;
            }            
        }

        personalMovieDb.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    writeYourGenres2: function() {
        for (let i = 1; i < 2; i++) {
            let myGenres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase;

            if (myGenres === '' || myGenres == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                //personalMovieDb.genres = String(myGenres).split(', ');
                personalMovieDb.genres = myGenres.split(', ');
                personalMovieDb.genres.sort();
            }           
        }
    }

};


//personalMovieDb.start();

// personalMovieDb.rememberMyFilms();

//personalMovieDb.detectPersonalLevel();

//personalMovieDb.showMyDB(personalMovieDb.private);

// personalMovieDb.writeYourGenres();


 //console.log(personalMovieDb);



// let i = 0;
// while (i < 2) {
//     const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
//     secondQuestion = prompt('На сколько оцените его?', '');

//     if  (firstQuestion != null && secondQuestion != null && firstQuestion != '' &&
//             secondQuestion != '' && firstQuestion.length < 50) {
//         personalMovieDb.movies[firstQuestion] = secondQuestion;
//         console.log('Done!');
//         i++;
//     } else {
//         console.log('error');
//     }
  
// }

