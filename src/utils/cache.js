
/**
 * A function to pre cache images and to load faster
 * @param images {@Array}
 */
exports.preLoad = function (images = []) {
    var tempImage = [];

    if (images.length)
    images.forEach((aImage, index) => {
        tempImage[index] = new Image();
        tempImage[index].src = aImage;
    });
}