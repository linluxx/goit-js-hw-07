import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
galleryItems.forEach((item) =>
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
  <a class="gallery__link" href='${item.original}'>
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
);

galleryEl.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(
    `
      <img src="${evt.target.dataset.source}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscClose);
      },
    }
  );

  function onEscClose(evt) {
    if (evt.code === "Escape") {
      modal.close();
      console.log(evt);
    }
  }
  modal.show();
}
