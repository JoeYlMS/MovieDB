import {generateUrl, getUrlSearch} from "./utils";
import {renderMovies, renderDetails, renderSearches, renderNotFound, renderError} from "./templates";

export const getMovies = (path, selector) => {

    fetch(generateUrl(path))
        .then(res => res.json())
        .then(data => {
            const root = document.querySelector(selector)
            data.status_message && data.status_code ?
                root.innerHTML = renderError(data)
                :
            root.insertAdjacentHTML('beforeend', renderMovies(data.results, path))
        })
}
export const getDetails = (path, selector) => {

    fetch(generateUrl(path))
        .then(res => res.json())
        .then(data => {
            const root = document.querySelector(selector);
            data.status_message && data.status_code ?
                root.innerHTML = renderError(data)
                :
                 root.innerHTML = renderDetails(data,path)
        })
}
export const getSearch = (search, selector) => {

    fetch(getUrlSearch(search))
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const root = document.querySelector(selector)
            if (data.results.length === 0){
                data.status_message && data.status_code ?
                    root.innerHTML = renderError(data)
                    :
                root.innerHTML = renderNotFound(search)
                console.log(search)
            }else {
                data.status_message && data.status_code ?
                    root.innerHTML = renderError(data)
                    :
                root.innerHTML = renderSearches(data.results, search)
            }

        })
}

