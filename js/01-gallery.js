import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');


const createGalleryMarkup = items => {
  return items
    .map(item => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            data-source="${item.original}"
          />
        </a>
      </li>
    `)
    .join('');
};

gallery.innerHTML = createGalleryMarkup(galleryItems);
gallery.addEventListener('click', handlerClick);

function handlerClick(evt) {
    evt.preventDefault();

    const element = evt.target;
    if (element.classList.contains('gallery__image')) {
        const id = element.dataset.source;
        const instance = basicLightbox.create(`<img
        src="${id}"
        alt="${element.alt}"
      />`);
      

      const handleKeyDown = event => {
        if (event.key === 'Escape') {
          instance.close();
        }
      };
      instance.show();
      document.addEventListener('keydown', handleKeyDown);
    }
};


