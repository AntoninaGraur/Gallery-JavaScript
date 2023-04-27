import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
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
  })
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

let modal;

function onModalEscapeClose(event) {
  console.log(event.code)
  if (event.code !== "Escape") return;
  modal.close();
}

galleryList.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") return;
  const largeImageSrc = event.target.dataset.source;
  event.preventDefault();
  const options = {
    onShow: (instance) => {
      document.addEventListener("keydown", onModalEscapeClose);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", onModalEscapeClose);
    },
  };

  modal = basicLightbox.create(
    `
      <img src="${largeImageSrc}" alt="" />
    `,
    options
  );
  modal.show();
});
