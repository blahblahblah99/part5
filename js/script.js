// File: script.js
// Desc: This file does everything
// Author: Keegan Hughes
// Date: 24/10/2025
// Modified: 21/11/2025

// Defines 10 unsorted movie objects
const movie1 = new movie(1, "The Mask", 1994, 5.0);
const movie2 = new movie(2, "Son of the Mask", 2005, 2.5);
const movie3 = new movie(3, "Grandson of the Mask", 2016, 1.2);
const movie4 = new movie(4, "Great Grandson of the Mask", 2027, 0.6);
const movie5 = new movie(5, "Greater Grandson of the Mask", 2038, 0.3);
const movie6 = new movie(6, "Greaterer Grandson of the Mask", 2049, 0.1);
const movie7 = new movie(7, "Greatererer Grandson of the Mask", 2060, -0.1);
const movie8 = new movie(8, "Greaterererer Grandson of the Mask", 2071, -0.6);
const movie9 = new movie(9, "Greatererererer Grandson of the Mask", 2082, -1.2);
const movie10 = new movie(10, "Greaterererererer Grandson of the Mask", 2093, -5.0);

// Creates an array and stores the movies inside it
const maskMovies = [
  movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10
];

document.getElementById("refreshList").addEventListener("click", () => {
    renderMovies(maskMovies);
});

document.getElementById("searchByID").addEventListener("click", () => {
    const id = Number(document.getElementById("sIDInput").value);
    const result = maskMovies.filter(movie => movie.movieID === id);
    renderMovies(result);
});

document.getElementById("searchByTitle").addEventListener("click", () => {
    const title = document.getElementById("sTitleInput").value.toLowerCase();
    const result = maskMovies.filter(movie => movie.title.toLowerCase().includes(title));
    renderMovies(result);
});

document.getElementById("sortAZ").addEventListener("click", () => {
    maskMovies.sort((a, b) => a.title.localeCompare(b.title));
    renderMovies(maskMovies);
});

document.getElementById("sortZA").addEventListener("click", () => {
    maskMovies.sort((a, b) => b.title.localeCompare(a.title));
    renderMovies(maskMovies);
});

document.getElementById("bestMovies").addEventListener("click", () => {
    maskMovies.sort((a, b) => b.rating - a.rating);
    renderMovies(maskMovies);
});

document.getElementById("addMovie").addEventListener("click", () => {
    const id = Number(document.getElementById("aIDInput").value);
    const title = document.getElementById("aTitleInput").value;
    const year = Number(document.getElementById("aYearInput").value);
    const rating = Number(document.getElementById("aRatingInput").value);

    // Validation
    if (!title || isNaN(id) || isNaN(year) || isNaN(rating)) {
        alert("Please enter valid movie details!");
        return;
    }

    const newMovie = new movie(id, title, year, rating);
    maskMovies.push(newMovie);

    // Clear input fields
    document.getElementById("aIDInput").value = "";
    document.getElementById("aTitleInput").value = "";
    document.getElementById("aYearInput").value = "";
    document.getElementById("aRatingInput").value = "";

    renderMovies(maskMovies);
});

renderMovies(maskMovies);