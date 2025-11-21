// File: movieobject.js
// Desc: This file has the movie object class and the refresh list function
// Author: Keegan Hughes
// Date: 21/11/2025
// Modified: 21/11/2025

// Defines a movie class with the properties movieID, title, year, and rating
class movie {
  constructor(movieID, title, year, rating) {
    this.movieID = movieID;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}

// Get the movie list UL element
const movieListElement = document.querySelector(".movie-list");

// Function to render movies
function renderMovies(list) {
    // Remove all current movie rows except the header
    movieListElement.innerHTML = `
        <li>
            <p class="idLI">ID</p>
            <p class="titleLI">Title</p>
            <p class="yearLI">Year</p>
            <p class="ratingLI">Rating</p>
        </li>
    `;

    // Add each movie
    list.forEach(movie => {
        const li = document.createElement("li");

        const idP = document.createElement("p");
        idP.textContent = movie.movieID;
        idP.classList.add("idLI");

        const titleP = document.createElement("p");
        titleP.textContent = movie.title;
        titleP.classList.add("titleLI");

        const yearP = document.createElement("p");
        yearP.textContent = movie.year;
        yearP.classList.add("yearLI");

        const ratingP = document.createElement("p");
        ratingP.textContent = movie.rating;
        ratingP.classList.add("ratingLI");

        li.append(idP, titleP, yearP, ratingP);
        movieListElement.appendChild(li);
    });
}