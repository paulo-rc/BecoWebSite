$("#fakeLoader").fakeLoader({
  timeToHide:45000, //Time in milliseconds for fakeLoader disappear
  zIndex:"999",//Default zIndex
  spinner:"spinner7",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
  bgColor:"white", //Hex, RGB or RGBA colors
  imagePath:"img/BecoLogo.png" //If you want can you insert your custom image
});

$(window).load(function() {
  $("#fakeLoader").click(function() {
  $("#fakeLoader").fadeOut(500);
  })
});