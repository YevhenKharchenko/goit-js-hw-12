import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import bixOctagonSvg from './img/bi_x-octagon.svg';
import axios from 'axios';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-btn');
const loaderAnimation = document.createElement('div');
loaderAnimation.classList.add('loader');

let pageNumber = 1;
let limitOfPicsPerPage = 40;
let totalHits;
let inputQuery = '';
const userKey = import.meta.env.VITE_API_KEY;

const instanceOfLightbox = new SimpleLightbox('li a', {
  captionsData: 'alt',
  captionClass: 'img-caption',
  captionDelay: 250,
});

form.addEventListener('submit', onFormSubmit);

loadBtn.addEventListener('click', onLoadBtnClick);

async function onFormSubmit(e) {
  e.preventDefault();

  if (!formInput.value.trim()) {
    formInput.value = '';
    return iziToast.warning({
      message: 'Input field is empty. Please provide a value.',
      position: 'topRight',
    });
  }

  try {
    loadBtn.style.display = 'none';
    pageNumber = 1;
    gallery.innerHTML = '';
    form.after(loaderAnimation);
    loaderAnimation.style.marginTop = '300px';
    inputQuery = formInput.value;
    const pics = await fetchPics();
    renderPics(pics);
    loaderAnimation.remove();
  } catch (error) {
    loaderAnimation.remove();
    iziToast.show({
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
      color: '#EF4040',
      messageColor: '#FAFAFB',
      iconUrl: bixOctagonSvg,
    });
    formInput.value = '';
  }
}

async function fetchPics() {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: userKey,
      q: inputQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: limitOfPicsPerPage,
      page: pageNumber,
    },
  });

  totalHits = response.data.totalHits;

  return response.data;
}

function renderPics({ hits }) {
  if (!hits.length) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
      position: 'topRight',
      color: '#EF4040',
      messageColor: '#FAFAFB',
      iconUrl: bixOctagonSvg,
    });
  }

  if (hits.length) {
    loadBtn.style.display = 'flex';
    loadBtn.after(loaderAnimation);
    loaderAnimation.style.marginTop = '0';
  }

  if (hits.length < limitOfPicsPerPage && hits.length >= 1) {
    loadBtn.style.display = 'none';
    loaderAnimation.remove();
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
    });
  }

  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
              <a class="item-link" href="${largeImageURL}">
                <img
                  src="${webformatURL}"
                  alt="${tags}"
                  width="360"
                  height="200"
                />
              </a>
              <ul class="mini-list">
                <li class="mini-header">
                  <h3>Likes</h3>
                  <p>${likes}</p>
                </li>
                <li class="mini-header">
                  <h3>Views</h3>
                  <p>${views}</p>
                </li>
                <li class="mini-header">
                  <h3>Comments</h3>
                  <p>${comments}</p>
                </li>
                <li class="mini-header">
                  <h3>Downloads</h3>
                  <p>${downloads}</p>
                </li>
              </ul>
            </li>`
    )
    .join('');

  loaderAnimation.remove();
  gallery.insertAdjacentHTML('beforeend', markup);
  formInput.value = '';
  instanceOfLightbox.refresh();
}

async function onLoadBtnClick() {
  const totalPages = Math.floor(totalHits / limitOfPicsPerPage);
  loadBtn.after(loaderAnimation);
  loadBtn.style.display = 'none';
  pageNumber++;

  try {
    const pics = await fetchPics();
    renderPics(pics);
    const galleryItem = document.querySelector('.gallery-item');
    const galleryItemRect = galleryItem.getBoundingClientRect();
    const galleryComputedStyle = getComputedStyle(gallery);
    const galleryGapValue = parseFloat(
      galleryComputedStyle.getPropertyValue('gap')
    );

    scrollBy({
      top: galleryItemRect.height * 3 + galleryGapValue * 5,
      behavior: 'smooth',
    });

    if (pageNumber > totalPages) {
      loadBtn.style.display = 'none';
      loaderAnimation.remove();

      return iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }
  } catch (error) {
    loaderAnimation.remove();
    iziToast.show({
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
      color: '#EF4040',
      messageColor: '#FAFAFB',
      iconUrl: bixOctagonSvg,
    });
  }
}
