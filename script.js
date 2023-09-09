const movie1 = {
name : "gran turismo ",
img: "https://imgix.hoyts.com.au/mx/posters/au/gran-turismo-based-on-a-true-story-d8b35111.jpg"

}
const movie2 = {
    name : "Mission Impossible 7 ",
    img : "https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_.jpg"
    
    }

    const movie3 = {
        name : "Heart of Stone ",
        img : "https://netnaija.ng/wp-content/uploads/2023/08/WAPK4B1la0B-1.webp"
        
        }
        let movies = [movie1,movie2,movie3]
        let container = document.getElementById("container")
        movies.forEach((movie) => 
        container.innerHTML += `
            <div class="movie">
            <img src="${movie.img}" alt="movie picture" />
            <h2>${movie.name}</h2>
            </div>
            `

        )
        