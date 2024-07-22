import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderImages } from "./js/render-functions";
import { getHttpRequest, fetchImages } from "./js/pixabay-api";

const lightbox = new SimpleLightbox(".gallery", {
    captionDelay: 250,
    captionPosition: "bottom",
    captionsData: "alt"
});

const searchPage = {
    searchForm: document.querySelector(".search-form"),
    gallery: document.querySelector(".gallery"),
    loader: document.querySelector(".js-loader"),
};

searchPage.searchForm.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formValue = form.elements.searchtext.value.toLowerCase().trim();
    searchPage.gallery.innerHTML = "";
    searchPage.loader.classList.add("loader");
    fetchImages(getHttpRequest(formValue))
        .then((data) => {
            searchPage.loader.classList.remove("loader");
            const hits = data.hits;
            if (hits.length === 0) {
                fetchError();
            } 
            searchPage.gallery.insertAdjacentHTML("beforeend", renderImages(hits));
            lightbox.refresh();
        })
        .catch(fetchError)
        .finally(searchPage.searchForm.reset());
}

const fetchError = () => {
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
    });
};