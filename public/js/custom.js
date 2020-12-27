$(document).ready(function() {
  $('.sub-menu ul').hide();
  $('.sub-menu a').click(function() {
    $(this)
      .parent('.sub-menu')
      .children('ul')
      .slideToggle('100');
    $(this)
      .find('.right')
      .toggleClass('fa-caret-up fa-caret-down');
  });
  // scrollTop footer
  $('.clps').on('click', function(event) {
    event.preventDefault();
    if ($('.clps').hasClass('collapsed') == false) {
      $('.clps').addClass('collapsed');
      $('html, body').animate(
        {
          scrollTop: $('.clps').offset().top
        },
        800
      );
    } else {
      $('.clps').removeClass('collapsed');
    }
  });
  $('.filter').click(function() {
    $('body').toggleClass('filterOpened');
    $('.filer_data').show(100);
  });
  $('.menu_overlay_filter').click(function() {
    $('body').removeClass('filterOpened');
  });
  $('.backbtn').on('click', function(event) {
    $('.filer_data').hide(100);
    $('body').removeClass('filterOpened');
  });
  $('.show-more').click(function() {
    if ($('.text').hasClass('show-more-height')) {
      $(this).text('(Show Less)');
    } else {
      $(this).text('+5 more offer available');
    }
    $('.text').toggleClass('show-more-height');
  });
  $('.openMenu').click(function() {
    $('body').toggleClass('menuOpened');
  });
  $('.menu_overlay').click(function() {
    $('body').removeClass('menuOpened');
  });
  $('.pinc').click(function() {
    $('.deliverymian').hide();
    $('.changepin').show();
  });
  $('.wishlistsection .icon .fa-heart').click(function(event) {
    if ($('.wishlistsection .icon .fa-heart').hasClass('fas') == true) {
      $('.wishlistsection .icon .fa-heart')
        .removeClass('fas')
        .addClass('far');
    } else {
      $('.wishlistsection .icon .fa-heart')
        .removeClass('far')
        .addClass('fas');
    }
  });
  $('.activeimg').on('click', function() {
    $('.activeimg').removeClass('active');
    $(this).addClass('active');
  });
  $('.st').on('click', function() {
    $('.st').removeClass('active');
    $(this).addClass('active');
  });
  $('.rm').on('click', function() {
    $('.rm').removeClass('active');
    $(this).addClass('active');
  });
  $('tr').click(function(e) {
    e.preventDefault();
    $('tr').removeClass('active'); // removes all highlights from tr's
    $(this).addClass('active'); // adds the highlight to this row
  });
  var acc = document.getElementsByClassName('accordion');

  var j;
  for (var j = 0; j < acc.length; j++) {
    acc[j].addEventListener('click', function(e) {
      var node = e.target.childNodes[3];
      var temp = node.className;
      var arr = e.target.parentElement.childNodes
      for(var k=1;k<arr.length;k+=2){
        arr[k].childNodes[3].className = 'bx bx-chevron-down';
        arr[k].nextSibling.style.display = "none"
      }
      if(temp=='bx bx-chevron-up'){
        node.className = 'bx bx-chevron-down'
        e.target.nextSibling.style.display = 'none'
      }
      else if(temp=='bx bx-chevron-down'){
        node.className = 'bx bx-chevron-up'
        e.target.nextSibling.style.display = 'block';
      }
    });
  }
  function toggleVisibility() {
    var x = document.getElementById("input-pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  document.getElementById("cart-items-dropdown-menu").onclick = (e) =>{
    var content = document.getElementById("cart-items-dropdown-content")
    var icon = document.getElementById("cart-items-dropdown-icon")
    if(icon.className=="bx bx-chevron-down"){
      icon.className = "bx bx-chevron-up"
      content.style.display="block"
    }
    else{
      icon.className = "bx bx-chevron-down"
      content.style.display="none"
    }
  }
  document.getElementById("eye-password").addEventListener("click", toggleVisibility);
  
});