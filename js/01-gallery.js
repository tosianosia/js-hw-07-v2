import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

galleryContainer.innerHTML = createGalleryItemsMarkup(galleryItems);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItemsMarkup(items) {
  return items
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
}

// function onGalleryContainerClick(evt) {
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }

//   evt.preventDefault();
//   const imageUrl = evt.target.dataset.source;
//   const imageDescr = evt.target.alt;

//   const modalImage = basicLightbox.create(
//     `<img src="${imageUrl}" alt="${imageDescr}">`,
//     {
//       onShow(modalImage) {
//         window.addEventListener("keydown", onEscKeyPress);
//       },
//       onClose(modalImage) {
//         window.removeEventListener("keydown", onEscKeyPress);
//       },
//     }
//   );

//   modalImage.show();

//   function onEscKeyPress(evt) {
//     const ESC_KEY_CODE = "Escape";
//     const isEscKey = evt.code === ESC_KEY_CODE;

//     if (isEscKey) {
//       modalImage.close();
//     }
//   }
// }

const modalImage = basicLightbox.create(`<img src="" alt="">`, {
  onShow(modalImage) {
    window.addEventListener("keydown", onEscKeyPress);
  },
  onClose(modalImage) {
    window.removeEventListener("keydown", onEscKeyPress);
  },
});

function onGalleryContainerClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  evt.preventDefault();
  const imageUrl = evt.target.dataset.source;
  const imageDescr = evt.target.alt;

  modalImage.element().querySelector("img").src = imageUrl;
  modalImage.element().querySelector("img").alt = imageDescr;
  modalImage.show();
}

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = evt.code === ESC_KEY_CODE;

  if (isEscKey) {
    modalImage.close();
  }
}

console.log(galleryItems);
