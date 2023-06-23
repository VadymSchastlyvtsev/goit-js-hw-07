import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('.gallery');

const createGalleryMarkup = items => {
  return items
    .map(item => `
    <li class="item.gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>
    `)
    .join('');
};

gallery.innerHTML = createGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
