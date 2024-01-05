function createGallery(galleryData, renderGalleryItem) {
  return galleryData.map(itemData => renderGalleryItem(itemData)).join('');
}

function createItemTemplate({ original, preview, description }) {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
}

function createLightboxGallery({ original, preview, description }) {
  return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`;
}

export { createGallery, createItemTemplate, createLightboxGallery };