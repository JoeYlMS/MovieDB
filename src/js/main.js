import {getDetails, getMovies, getSearch} from "./api";
import {renderError} from "./templates";
const search = document.querySelector('.form_search')
const searchInput = search.querySelector('.input_search')


search.addEventListener('submit', e => {
    e.preventDefault()
    location.hash = `#query=${searchInput.value}`
    search.reset()
})


window.addEventListener('hashchange', e => {
    checkUrl();
})

function checkUrl() {
    const {location: {hash}} = window;
    const [hashName, movieId] = hash.split('=');
    if (hashName === '#movieId') {
        getDetails(movieId, '.root');
    }
    else if(hashName === `#query`){
        getSearch(movieId,`.root`)
    }
    else if(hashName === ``) {
        document.querySelector('.root').innerHTML = ""
        getMovies('upcoming', '.root')
        getMovies('popular', '.root')
        getMovies('top_rated', '.root')

    }else {
        console.log(hashName)
        document.querySelector('.root').innerHTML = renderError({status_message: 'Error',status_code:"Page doesn't" +
                " exist"})

    }

}

checkUrl();