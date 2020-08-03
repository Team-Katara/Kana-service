//generate image URLs to upload to S3

var imageMaker = function() {
  var baseURL = 'https://picsum.photos/id/';
  var randomize = Math.floor(Math.random() * 100);
  var urlsize = '/200/300';
  return baseURL + randomize + urlsize;
};


var getUrl = function () {
  var imageUrls = [];

  for (var i = 0; i < 100; i++) {
    imageUrls.push(imageMaker());
  }
  return imageUrls;
};

console.log(getUrl());

