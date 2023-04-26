import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');

galleryList.insertAdjacentHTML('beforeend', galleryItemsMarkup);



const galleryImages = document.querySelectorAll('.gallery__image');

galleryImages.forEach((image) => {
    image.addEventListener('click', (event) => {
      
      const largeImageSrc = image.dataset.source;
      event.preventDefault()
    const modal = basicLightbox.create(`
      <img src="${largeImageSrc}" alt="" />
    `);
    modal.show();
  });
});

