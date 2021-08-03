const images = ["00.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg"];
const image = images[parseInt(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${image}`;
document.body.appendChild(bgImage);