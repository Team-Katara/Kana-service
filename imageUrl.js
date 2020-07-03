//generate images to upload to S3

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

// image urls

// https://picsum.photos/id/83/200/300
//   https://picsum.photos/id/76/200/300
//   https://picsum.photos/id/61/200/300
//   https://picsum.photos/id/42/200/300
//   https://picsum.photos/id/53/200/300
//   https://picsum.photos/id/75/200/300
//   https://picsum.photos/id/42/200/300
//   https://picsum.photos/id/67/200/300
//   https://picsum.photos/id/26/200/300
//   https://picsum.photos/id/29/200/300
//   https://picsum.photos/id/5/200/300
//   https://picsum.photos/id/84/200/300
//   https://picsum.photos/id/46/200/300
//   https://picsum.photos/id/45/200/300
//   https://picsum.photos/id/97/200/300
//   https://picsum.photos/id/61/200/300
//   https://picsum.photos/id/63/200/300
//   https://picsum.photos/id/62/200/300
//   https://picsum.photos/id/65/200/300
//   https://picsum.photos/id/90/200/300
//   https://picsum.photos/id/90/200/300
//   https://picsum.photos/id/20/200/300
//   https://picsum.photos/id/70/200/300
//   https://picsum.photos/id/22/200/300
//   https://picsum.photos/id/49/200/300
//   https://picsum.photos/id/20/200/300
//   https://picsum.photos/id/69/200/300
//   https://picsum.photos/id/11/200/300
//   https://picsum.photos/id/50/200/300
//   https://picsum.photos/id/47/200/300
//   https://picsum.photos/id/63/200/300
//   https://picsum.photos/id/78/200/300
//   https://picsum.photos/id/59/200/300
//   https://picsum.photos/id/23/200/300
//   https://picsum.photos/id/22/200/300
//   https://picsum.photos/id/14/200/300
//   https://picsum.photos/id/76/200/300
//   https://picsum.photos/id/52/200/300
//   https://picsum.photos/id/35/200/300
//   https://picsum.photos/id/72/200/300
//   https://picsum.photos/id/38/200/300
//   https://picsum.photos/id/93/200/300
//   https://picsum.photos/id/99/200/300
//   https://picsum.photos/id/25/200/300
//   https://picsum.photos/id/2/200/300
//   https://picsum.photos/id/26/200/300
//   https://picsum.photos/id/43/200/300
//   https://picsum.photos/id/55/200/300
//   https://picsum.photos/id/23/200/300
//   https://picsum.photos/id/87/200/300
//   https://picsum.photos/id/64/200/300
//   https://picsum.photos/id/52/200/300
//   https://picsum.photos/id/55/200/300
//   https://picsum.photos/id/71/200/300
//   https://picsum.photos/id/53/200/300
//   https://picsum.photos/id/37/200/300
//   https://picsum.photos/id/88/200/300
//   https://picsum.photos/id/60/200/300
//   https://picsum.photos/id/53/200/300
//   https://picsum.photos/id/69/200/300
//   https://picsum.photos/id/46/200/300
//   https://picsum.photos/id/95/200/300
//   https://picsum.photos/id/10/200/300
//   https://picsum.photos/id/15/200/300
//   https://picsum.photos/id/80/200/300
//   https://picsum.photos/id/71/200/300
//   https://picsum.photos/id/24/200/300
//   https://picsum.photos/id/56/200/300
//   https://picsum.photos/id/14/200/300
//   https://picsum.photos/id/59/200/300
//   https://picsum.photos/id/19/200/300
//   https://picsum.photos/id/82/200/300
//   https://picsum.photos/id/15/200/300
//   https://picsum.photos/id/49/200/300
//   https://picsum.photos/id/92/200/300
//   https://picsum.photos/id/93/200/300
//   https://picsum.photos/id/46/200/300
//   https://picsum.photos/id/35/200/300
//   https://picsum.photos/id/70/200/300
//   https://picsum.photos/id/57/200/300
//   https://picsum.photos/id/38/200/300
//   https://picsum.photos/id/80/200/300
//   https://picsum.photos/id/68/200/300
//   https://picsum.photos/id/76/200/300
//   https://picsum.photos/id/84/200/300
//   https://picsum.photos/id/44/200/300
//   https://picsum.photos/id/79/200/300
//   https://picsum.photos/id/72/200/300
//   https://picsum.photos/id/77/200/300
//   https://picsum.photos/id/29/200/300
//   https://picsum.photos/id/43/200/300
//   https://picsum.photos/id/13/200/300
//   https://picsum.photos/id/8/200/300
//   https://picsum.photos/id/13/200/300
//   https://picsum.photos/id/62/200/300
//   https://picsum.photos/id/34/200/300
//   https://picsum.photos/id/8/200/300
//   https://picsum.photos/id/84/200/300
//   https://picsum.photos/id/26/200/300
//   https://picsum.photos/id/72/200/300

