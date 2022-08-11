import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
galleryItems.forEach((item) =>
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href='${item.original}'>
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`
  )
);

let galleryLightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
