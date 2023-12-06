/* Declaring the array of image filenames */
const imgArray = ['cerealkiller.jpg', 'clamp.JPG', 'coloradomap.JPG', 'cosymphony.jpg', 'houseofcards.JPG', 'mochi.png', 'monet.jpg', 'octopus.JPG', 'openmic.png', 'rays.jpg'];

/* Declaring the alternative text for each image file */
var altDict = {
    'img1.jpg': "image 1",
    'img2.jpg': "image 2",
    'img3.jpg': "image 3",
    'img4.jpg': "image 4",
    'img5.jpg': "image 5",
}

/* Looping through images */
for(img of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../portfolioimg/${img}`);
    newImage.setAttribute('alt', altDict[img]);
}


