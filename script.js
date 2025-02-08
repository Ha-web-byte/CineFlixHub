function searchMovies() {
    let input = document.getElementById('search').value.toUpperCase();
    let movieList = document.getElementById('movie-list');
    let movieCards = movieList.getElementsByClassName('movie-card');

    for (let i = 0; i < movieCards.length; i++) {
        let movieTitle = movieCards[i].getElementsByTagName('h2')[0];
        if (movieTitle.innerText.toUpperCase().indexOf(input) > -1) {
            movieCards[i].style.display = "";
        } else {
            movieCards[i].style.display = "none";
        }
    }
}

function filterByCategory() {
    let category = document.getElementById('category').value;
    let movieCards = document.getElementsByClassName('movie-card');

    for (let i = 0; i < movieCards.length; i++) {
        let movieCategory = movieCards[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        if (category === 'all' || movieCategory.includes(category)) {
            movieCards[i].style.display = "";
        } else {
            movieCards[i].style.display = "none";
        }
    }
}

function openTrailer(url) {
    window.open(url, '_blank');
}

function showMovieDetails(title, description, trailerUrl) {
    document.getElementById('movieTitle').innerText = title;
    document.getElementById('movieDescription').innerText = description;
    document.getElementById('watchTrailer').onclick = function() {
        openTrailer(trailerUrl);
    };
    document.getElementById('movieModal').style.display = "block";
}

document.querySelector(".close").onclick = function() {
    document.getElementById('movieModal').style.display = "none";
}
