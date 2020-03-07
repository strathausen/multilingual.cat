// we create a canvas element
var canvas = document.createElement("canvas");
var height = 20;
var width = 40;

canvas.height = height;
canvas.width = width;
// getting the context will allow to manipulate the image
var context = canvas.getContext("2d");

// We create a new imageData.
var imageData = context.createImageData(width, height);
// The property data will contain an array of int8
var data = imageData.data;

for (var i = 0; i < height * width; i++) {
  var y = Math.floor(i / width) - (i % height);
  data[i * 4 + 0] = 0 | 0; // Red
  data[i * 4 + 1] = 0 | 0; // Green
  data[i * 4 + 2] = 0 | 0; // Blue
  data[i * 4 + 3] = (i % 2 && y % 2 && Math.random() > 0.4 ? 1 : 0) * 256; // alpha (transparency)
}
// we put this random image in the context
context.putImageData(imageData, 0, 0); // at coords 0,0

function createData(type, mimetype) {
  var value = canvas.toDataURL(mimetype);
  if (value.indexOf(mimetype) > 0) {
    // we check if the format is supported
    return value;
  } else {
    return false;
  }
}

var img = document.querySelector("#png") || document.createElement("img");
img.width = width;
img.height = height;
img.src = createData("png", "image/png");
