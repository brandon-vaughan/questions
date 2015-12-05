// var header = document.querySelector('.lead__text');
// var bkg = document.querySelector('.lead__image');
// var animateHeight = header.offsetHeight*0.8;
// var scrollListener = function() {
//   var top = document.body.scrollTop;
//   if(top < animateHeight && top >= 0 ){ // Only transform while text is on screen
//     var s = top / animateHeight;
//     TweenLite.to(header, 0, {
//       force3D: true,
//       marginTop: -top/2,
//       opacity: 1-s
//     });
//     TweenLite.to(bkg, 0, {
//       force3D: true,
//       scale: 1+s/4 
//     });
//   }
// };
// document.body.addEventListener('scroll', scrollListener);
