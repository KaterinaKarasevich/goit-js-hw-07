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
    <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src= ${preview}
      data-source= ${original}
      alt= ${description}
    />
    </a> </div>`)
        .join("");

//3. функция insertListImages для вставки готовой разметки (строки) в документ HTML
const insertListImages = (string) => {
    imagesContainer.insertAdjacentHTML("beforeend", string);
};

console.log(renderList(galleryItems));
const result = renderList(galleryItems);
insertListImages(result);

//4. Вешаем обработчик события на галерею картинок, создаем функцию onClick для обработки клика
imagesContainer.addEventListener("click", onClick)

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    console.log(event.target.nodeName)
    onModalWindow(event)
}
//5.Работа с библиотекой  basicLightbox для создания галереи картинок, функция onModalWindow - для создания модального окна
function onModalWindow(event) {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
        {
            onShow: (instance) => {
                imagesContainer.addEventListener("keydown", onEscapeButton)
            },
            onClose: (instance) => {
                imagesContainer.removeEventListener("keydown", onEscapeButton)
            },
        },
        
    );
    instance.show()
    function onEscapeButton(event) {
        if (event.code === "Escape") {
            instance.close();
            console.log("Вы нажали на кнопку Escape")
        }
    }
}









