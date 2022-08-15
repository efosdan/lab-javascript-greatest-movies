// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = movies.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = movies.filter(function (drama) {
    if (
      movies.director === "Steven Spielberg" &&
      movies.director.includes("Drama")
    ) {
      return true;
    }
    return spielbergMovies.length;
  });
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  movies.reduce((acc, val) => {
    return acc + scoresAverage.val;
  }, 0) / movies.length;
}
scoresAverage();
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = movies.filter((movie) => {
    return movie.genre.include("Drama");
  });
  return dramaMoviesScore(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return movies.sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title);
  });
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return movies.map((movie) => {
    const minutes = movie.duration.slice(
      movie.duration.indexOf("") + 1,
      movie.duration.indexOf("m")
    );
    const hoursInMinutes =
      movie.duration.slice(0, movie.duration.indexOf("h")) * 60;

    return { ...movie, duration: Number(minutes) + Number(hoursInMinutes) };
  });
}
turnHoursToMinutes(movies);
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const years = [...new set(movies.map((movie) => movie.year))];
}
