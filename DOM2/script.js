import { loadImages } from './api.js';
import { renderImages, clearGallery, removeLastImage, reverseGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-load').addEventListener('click', () => loadImages(renderImages));
    document.getElementById('btn-clear').addEventListener('click', clearGallery);
    document.getElementById('btn-remove').addEventListener('click', removeLastImage);
    document.getElementById('btn-reverse').addEventListener('click', reverseGallery);

    loadImages(renderImages);
});