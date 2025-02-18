export async function loadImages(callback) {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=4');
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error('Помилка при завантаженні зображень:', error);
    }
}