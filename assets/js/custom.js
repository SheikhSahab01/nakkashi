$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });
});


$(document).on('ready', function() {
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrow: false,
        autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4 ,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      });

      $('.team-autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrow: false,
        autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4 ,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
      });
});

$(document).ready(function(){
  $("#toTop").hide();
  $(function toTop() {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#toTop').fadeIn();
          } 
          else {
              $('#toTop').fadeOut();
          }
      });

      $('#toTop').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });         
          
  });