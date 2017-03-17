
/**
* This function loads the images and their corresponding data from app.js
**/
function loadImageContent() {
  var imageData = images; //image data

  Object.keys(imageData).forEach(function(k) {
    console.log(imageData[k]);
      var heading = imageData[k].heading,
          description = imageData[k].description,
          path = imageData[k].path;
      var imageBlockContainer = $('<div class="imageBlock" style="background:url('+ path +') center center no-repeat; background-size:cover;"><div class="overlay"></div></div>');

      $(imageBlockContainer).append('<div class="imageText"><p class="boldText">' + heading + '</p><p>'+ description + '</p></div>');
      $('.imagesWrap').append(imageBlockContainer);
  });
}

/**
* This function handles the hamburger nav toggle behavior
**/
function navToggle() {
    var toggle = $('.c-hamburger');
    var navContent = $('.mobileNav');

    $(toggle).click(function(e) {
        e.stopPropagation();
        if($(this).hasClass('is-active'))
        {
            $(this).removeClass('is-active');
            $(navContent).hide('fast');
        }
        else
        {
            $(this).addClass('is-active');
            $(navContent).show('fast');
        }
    });

    $(navContent).click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function() {
        $(toggle).removeClass('is-active');
        $(navContent).hide('fast');
    });
}

function init() {
  loadImageContent();
  navToggle();
}

$(document).ready(function() {
  init();
});
