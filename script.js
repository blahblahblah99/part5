// File: script.js
// Desc: This file shows something i think
// Author: Keegan Hughes
// Date: 24/10/2025
// Modified: 14/11/2025

// Defines a movie class with the properties movieID, title, year, and rating
class movie {
  constructor(movieID, title, year, rating) {
    this.movieID = movieID;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}
// Logs out the movie class
console.log("The movie class is: " + movie);

// Defines 10 unsorted movie objects
const movie7 = new movie(1, "The Mask", 1994, 5.0);
const movie10 = new movie(2, "Son of the Mask", 2005, 2.5);
const movie5 = new movie(3, "Grandson of the Mask", 2016, 1.2);
const movie3 = new movie(4, "Great Grandson of the Mask", 2027, 0.6);
const movie4 = new movie(5, "Greater Grandson of the Mask", 2038, 0.3);
const movie9 = new movie(6, "Greaterer Grandson of the Mask", 2049, 0.1);
const movie1 = new movie(7, "Greatererer Grandson of the Mask", 2060, -0.1);
const movie8 = new movie(8, "Greaterererer Grandson of the Mask", 2071, -0.6);
const movie6 = new movie(9, "Greatererererer Grandson of the Mask", 2082, -1.2);
const movie2 = new movie(10, "Greaterererererer Grandson of the Mask", 2093, -5.0);

// Creates an array and stores the movies inside it
const maskMovies = [
  movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10
];
