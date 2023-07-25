import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galeryList=document.querySelector(".gallery");

galleryItems.forEach ((item) => {
    
    galeryList.insertAdjacentHTML('beforeend', `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`)
});

galeryList.addEventListener("click", (event)=>{
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800">`)

    instance.show();

   
})

