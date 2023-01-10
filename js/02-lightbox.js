import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//1. Получаю ссылку на галерею картинок
const imagesContainer = document.querySelector(".gallery");
//2. функция renderList для создания разметки галереи
const renderList = (images) =>
    images
        .map(({preview, original, description}) =>
            `<div class="gallery__item">
    <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a> </div>`)
        .join("");

   
//3. функция insertListImages для вставки готовой разметки (строки) в документ HTML
const insertListImages = (string) => {
     imagesContainer.insertAdjacentHTML("beforeend", string);
};

console.log(renderList(galleryItems));
const result = renderList(galleryItems);
insertListImages(result);

//4.  Работа с библиотекой SimpleLightbox для создания галереи картинок
const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 500,
    close: true,
    loop: true,
});
console.log(gallery)

