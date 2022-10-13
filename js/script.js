

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
      secondQuestion = prompt('На сколько оцените его?', ''),
      firstQuestionRepeat = prompt('Один из последних просмотренных фильмов?', ''),
      secondQuestionRepeat = prompt('На сколько оцените его?', '');
      
personalMovieDb.movies[firstQuestion] = secondQuestion;
personalMovieDb.movies[firstQuestionRepeat] = secondQuestionRepeat;

for (let i = 0; i < 2; i++) {
    const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
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

let i = 0;
while (i < 2) {
    const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
    secondQuestion = prompt('На сколько оцените его?', '');

    if  (firstQuestion != null && secondQuestion != null && firstQuestion != '' &&
            secondQuestion != '' && firstQuestion.length < 50) {
        personalMovieDb.movies[firstQuestion] = secondQuestion;
        console.log('Done!');
        i++;
    } else {
        console.log('error');
    }
  
}

if (personalMovieDb.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log('Вы - классический зритель');
} else if (personalMovieDb.count >= 30) {
    console.log('Вы - киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDb);