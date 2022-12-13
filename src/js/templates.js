import {generateImgUrl, generateTitle} from "./utils";


export const renderMovies = (movies, path) => {
    return `<div class="container">
        <section>
        <h2 class="text-center">${generateTitle(path)}</h2>
            <div class="movies">
                ${movies.map(movie => renderMovie(movie)).join('')}
            </div>
        </section>
    </div>`
}


export const renderMovie = ({id, release_date, poster_path, title, vote_average}) => {
    return `
            <div class="movie_card">
                <p class="rating">${vote_average * 10}%</p>
                <a href="#movieId=${id}"><img src="${generateImgUrl('w200', poster_path)}"></a>
                <a href="#movieId=${id}"><h3>${title}</h3></a>
                <p>Release Date: ${release_date}</p>
            </div>
          `
}

export const renderDetails = ({id, release_date, backdrop_path, overview, title, vote_average, tagline}) => {
    return `
               <a href="#movieId=${id}"><h3 class="montserrat movie_card_h">${title}</h3></a>
              <div class=" movie_card_details container d-flex">
                 <div class="movie_card_img"> <a href="#movieId=${id}"> <img src="${generateImgUrl('w500', backdrop_path)}"></a></div>
                 <div class="movie_card_content"> 
                  <p class="rating">Rating : ${Math.round(vote_average * 10)}%</p>
                  <p class="montserrat">${tagline}</p>
                  <p >Release Date: ${release_date}</p>
                  <p>Overview: ${overview}</p>
                 </div>
               </div>
     
          `
}

export const renderSearches = (searches, path) => {
    return `<div class="container">
            <h2 class="text-center"> Your request ${path}. Results :</h2>
            <div class="movies_search">
                ${searches.map(search => renderSearch(search)).join('')}
            </div>
       
    </div>`
}


const renderSearch = ({id, release_date, backdrop_path, overview, title, vote_average}) => {
    return `
               
        <div class=" movie_card_search d-flex">
           <div class="movie_card_img"> <a href="#movieId=${id}"> <img src="${generateImgUrl('w500', backdrop_path)}"></a></div>
           <div class="movie_card_content"> 
           <a href="#movieId=${id}"><h3 class="montserrat movie_card_h">${title}</h3></a>
           <p class="rating">Rating : ${Math.round(vote_average * 10)}%</p>
           <p >Release Date: ${release_date}</p>
           <p>Overview: ${overview ? overview : "There is no description for this movie."}</p>
           </div>
         </div>
    
          `
}

export const renderNotFound = (search) => {
    return`
        <div class="container text-center">
            <h3>Your request : ${search}</h3>
            <p>No matches found</p>
        </div>
    `
}
export const renderError = ({status_message, status_code}) => {
    return`
        <div class="container text-center">
            <h3>Error : ${status_code}</h3>
            <p>Messages : ${status_message}</p>
        </div>
    `
}



