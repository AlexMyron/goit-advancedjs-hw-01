import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
import { createGallery, createItemTemplate } from './common.js';

const galleryWrapper = document.querySelector('.js-gallery');
const galleryContent = createGallery(galleryItems, createItemTemplate);

galleryWrapper.insertAdjacentHTML('beforeend', galleryContent);
new SimpleLightbox('.js-gallery a');
