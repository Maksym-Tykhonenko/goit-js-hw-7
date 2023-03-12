import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryItemsMarkup = galleryItems.map(({ preview, original, description }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
         </a>
    </div>`
).join('');

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

galleryList.addEventListener('click', handleImgClick)

function handleImgClick (event) {
    event.preventDefault();
    const IMG_NODE = event.target.nodeName === "IMG";
    
    if (!IMG_NODE) {
        return;
    }
    const originalImg = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${originalImg}" width="300" height="300">
`)

instance.show()
};

