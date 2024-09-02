$(document).ready(function () {
  //save big images
  var $bigItem = $(".image-big-list-item");
  //save small images
  var $smallItem = $(".image-small-list-item");
  //click and moseenter function on small image
  //you could delete one eventlistener
  $smallItem.on("click mouseenter", function () {
    //remove active class from all items
    $bigItem.removeClass("active");
    $smallItem.removeClass("active");
    //add active class to item as small item's index
    $bigItem.eq($(this).index()).addClass("active");
    $smallItem.eq($(this).index()).addClass("active");
  });
});
