import { galleryItems } from './gallery-items.js';


const galeryList=document.querySelector(".gallery");

galleryItems.forEach ((item) => {
    
    galeryList.insertAdjacentHTML('beforeend', `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`)
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
 });