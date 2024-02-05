// $(document).ready(function(){
//   $(".read-more-2").click(function(){
//     $('.see-more').removeClass('see-more');
//   });
// });

$(document).ready(function(){
    $(".read-more-2").click(function() {
      $(this).prev().toggleClass('see-more-2');
      $(this).text($(this).text() == 'Read Less' ? 'Read More' : 'Read Less');
    });
  });
  
  
  
  
  
  $(function() {
      // Owl Carousel
     
      var owl = $("#Quick-buy-carousel .owl-carousel").owlCarousel({
        items: 3,
      //   margin: 50,
        loop: true,
        nav: true,
        dots:false,
        // center:true,
        autoplay: true,
        responsive: {
                0: {
                  items: 2,
                },
                768: {
                  items: 2,
                  stagePadding:100,
                },
                1000: {
                  items: 3,
                  stagePadding: 100,
                }
              }
      });
    });
   
  
  
  $(function() {
      // Owl Carousel
      var owl = $("#about-us .owl-carousel").owlCarousel({
        items: 1,
      //   margin: 200,
        loop: true,
        nav: true,
        dots:false,
        autoplay: true,
        responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 2
                },
                1000: {
                  items: 3 
                }
              }
      });
    });
    
    $(function() {
      // Owl Carousel
      var owl = $("#same-banner-carousel .owl-carousel").owlCarousel({
        items:1,
        // margin: 0,
        loop: false,
        nav: false,
        dots:false,
        autoplay: false,
        responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 1
                },
                1000: {
                  items: 1
                }
              }
      });
    });
  
    $(function() {
      // Owl Carousel
      var owl = $("#about-ftr-cards .owl-carousel").owlCarousel({
        items: 2,
        margin: 80,
        // center: true,
        // stagePadding: 50,
        loop: true,
        nav: true,
        dots:true,
        autoplay: true,
        autoplayTimeout:3000,
        autoplaySpeed: 1000,
        stagePadding: 10,
        responsive: {
                0: {
                  items: 1,
                  margin:0,
                },
                600: {
                  items: 2
                },
                1000: {
                  items: 2
                }
              }
      });
    });
  
    $(function() {
      // Owl Carousel
      var owl = $("#about-ftr .owl-carousel");
      owl.owlCarousel({
        items: 3,
      //   margin: 50,
        loop: true,
        nav: true,
        dots:false,
        // center:true,
        autoplay: true,
        responsive: {
                0: {
                  items: 2,
                },
                768: {
                  items: 2,
                  // stagePadding:100,
                },
                1000: {
                  items: 2,
                  // stagePadding: 100,
                }
              }
      });
    });
    
  
  
  $(document).ready(function(){
    $("#about-ftr i").click(function(){
      $(this).css('color','orange');
    });
  });
  
  
  // $(document).ready(function(){
  //   $(".div-1").click(function(){
  //     $(this).next().slideToggle("slow");
  //   });
  // });
  
  $(document).ready(function(){
    $(".div-1").click(function(){
      $('.sub-div').slideUp("slow");
      tog  = $(this).next().data('tog');
      if(tog=='close'){
        $(this).next().slideDown("slow");
        $(this).next().data("tog","open");
      }else{
        $(this).next().slideUp("slow");
        $(this).next().data("tog","close");
      }
    }); 
  });
  
  
  $(function() {
    // Owl Carousel
    var owl = $("#contact-carousel .owl-carousel").owlCarousel({
      items: 4,
    //   margin: 50,
      loop: true,
      nav: true,
      dots:false,
      // center:true,
      autoplay: true,
      responsive: {
              0: {
                items: 2
              },
              600: {
                items: 3
              },
              1000: {
                items: 4
              }
            }
    });
  });
  
  $(document).ready(function ($) {
      $("#Expert-area .owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
      autoplay:true,
          dots: false,
          nav: true,
          items: 3,
      responsive: {
        0: {
          items:2,  
        },
        600: {
          items: 3,
        },
        700: {
          items: 3,
        },
        750: {
          items: 2,
        },
        1150: {
          items: 3,
        }
      }
      });
      var owl = $("#Expert-area .owl-carousel").owlCarousel();
      $(".next-btn").click(function () {
          owl.trigger("next.owl.carousel");
      });
      $(".prev-btn").click(function () {
          owl.trigger("prev.owl.carousel");
      });
      $(".prev-btn").addClass("disabled");
      $(owl).on("translated.owl.carousel", function (event) {
          if ($("button").hasClass("disabled")) {
              $(".prev-btn").addClass("disabled");
          } else {
              $(".prev-btn").removeClass("disabled");
          }
          if ($(".owl-next").hasClass("disabled")) {
              $(".next-btn").addClass("disabled");
          } else {
              $(".next-btn").removeClass("disabled");
          }
      });
  });
  
  
  $(document).ready(function ($) {
      $("#Lawyer .owl-carousel").owlCarousel({
          loop: true,
          margin: 50,
          dots: false,
          nav: true,
          items: 2,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
      });
      var owl = $("#Lawyer .owl-carousel").owlCarousel();
      $(".next-btn").click(function () {
          owl.trigger("next.owl.carousel");
      });
      $(".prev-btn").click(function () {
          owl.trigger("prev.owl.carousel");
      });
      $(".prev-btn").addClass("disabled");
      $(owl).on("translated.owl.carousel", function (event) {
          if ($(".owl-prev").hasClass("disabled")) {
              $(".prev-btn").addClass("disabled");
          } else {
              $(".prev-btn").removeClass("disabled");
          }
          if ($(".owl-next").hasClass("disabled")) {
              $(".next-btn").addClass("disabled");
          } else {
              $(".next-btn").removeClass("disabled");
          }
      });
  });
  
  $(document).ready(function ($) {
    var totalSlides = $('.owl-carousel .owl-item').length;
      $("#Advocate .owl-carousel").owlCarousel({
          loop: true,
          margin: 30,
          // dots: true,
          nav: true,
          items: 2,
      dots: totalSlides > 3,
      dotsEach: totalSlides > 3 ? 3 : false,
      // dotsEach: 3,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
      });
      var owl = $("#Advocate .owl-carousel").owlCarousel();
      $(".next-btn").click(function () {
          owl.trigger("next.owl.carousel");
      });
      $(".prev-btn").click(function () {
          owl.trigger("prev.owl.carousel");
      });
      $(".prev-btn").addClass("disabled");
      $(owl).on("translated.owl.carousel", function (event) {
          if ($(".owl-prev").hasClass("disabled")) {
              $(".prev-btn").addClass("disabled");
          } else {
              $(".prev-btn").removeClass("disabled");
          }
          if ($(".owl-next").hasClass("disabled")) {
              $(".next-btn").addClass("disabled");
          } else {
              $(".next-btn").removeClass("disabled");
          }
      });
  });
  
  
  $(document).ready(function(){
    $("#Advocate i").click(function(){
      $(this).css('color','orange');
    });
  });
  
  
  $(document).ready(function(){
    $("#FAQs .sub-toggle-div").click(function(){
      $(this).next().slideToggle();
    });
  });
  
            
  
          // OTP Form (Focusing on next input)
          $("#otp-screen .form-control").keyup(function() {  
           
            if (this.value.length == 0) {
             
               $(this).blur().parent().prev().children('.form-control').focus();
               $(this).blur().prev('.form-control').focus();
            }
            else if (this.value.length == this.maxLength) {
         
                  $(this).blur().parent().next().children('.form-control').focus();
                  $(this).blur().next('.form-control').focus();
                
            }
            
              if( $(this).hasClass('last')){
                $(this).focus();
              }
            });
  
  
            function showPass() {
  
              var passInput = $("#passInput");
              if (passInput.attr('type') === 'password') {
                  $('#showPass').attr('class', 'fa fa-fw fa-eye field-icon');
                  passInput.attr('type', 'text');
  
  
              } else {
                  $('#showPass').attr('class', 'fa fa-fw fa-eye-slash field-icon');
                  passInput.attr('type', 'password');
  
              }
          }
  
  
          function showPass1() {
  
            var passInput = $("#passInput1");
            if (passInput.attr('type') === 'password') {
                $('#showPass1').attr('class', 'fa fa-fw fa-eye field-icon');
                passInput.attr('type', 'text');
  
  
            } else {
                $('#showPass1').attr('class', 'fa fa-fw fa-eye-slash field-icon');
                passInput.attr('type', 'password');
  
            }
  
        }
  
  
        // Nav-baar drop down (MY-ACCOUNT btn) 
        $(document).ready(function(){
          $("#dashboard-nav .my-account").click(function(){
            $(".lawyer-account").slideToggle();
          });
          $()
         });
  
         $(document).ready(function ($) {
          $("#adv-review .owl-carousel").owlCarousel({
            loop: true,
            margin: 50,
            dots: true,
            autoplay:true,
            autoplayTimeout:2000,
            nav: true,
            items: 2,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              1000: {
                items: 2
              }
            }
          });
          
          var owl = $("#adv-review .owl-carousel").owlCarousel();
          $(".next-btn").click(function () {
            owl.trigger("next.owl.carousel");
          });
          $(".prev-btn").click(function () {
            owl.trigger("prev.owl.carousel");
          });
          $(".prev-btn").addClass("disabled");
          $(owl).on("translated.owl.carousel", function (event) {
            if ($(".owl-prev").hasClass("disabled")) {
              $(".prev-btn").addClass("disabled");
            } else {
              $(".prev-btn").removeClass("disabled");
            }
            if ($(".owl-next").hasClass("disabled")) {
              $(".next-btn").addClass("disabled");
            } else {
              $(".next-btn").removeClass("disabled");
            }
          });
        });
  
  
        // $(document).ready(function(){
        //   $("#mob-nav .flip").click(function(){
        //     // $(".panel").slideToggle("slow");
        //     // $('#mob-nav .panel').slideUp();
        //     $(this).next().slideToggle("slow");
        //     // $('.fa-angle-right').css('rotate','45deg');
        //   });
        // });
  
           $(document).ready(function(){
          $(".owl-nav button").click(function(){
       
            $(this).siblings().css({'background':'white','color':'black', 'border':'1px solid #8C2B02'});
            $(this).css({'background':'linear-gradient(to right,  #8C2B02, #53389E)','color':'white'});
          });
  
          // $("#Quick-buy-carousel button.owl-next").click(function(){
  
          //   $(this).css({'background':'linear-gradient(to right,  #8C2B02, #53389E)','color':'white'});
          //   $(this).prev().css({'background':'white','color':'black'});
          // });
        });
  
        // #Quick-buy-carousel button.owl-next
  
       
  
        $(document).ready(function(){
          $("#mob-nav .flip").click(function(){
            $('.panel').slideUp("slow");
            tog  = $(this).next().data('tog');
            if(tog=='close'){
              $(this).next().slideDown("slow");
              $(this).next().data("tog","open");
            }else{
              $(this).next().slideUp("slow");
              $(this).next().data("tog","close");
            }
          }); 
        });
  
        $(document).ready(function(){
          $("#mob-nav .flip").click(function(){
            $(this).find('.fa-angle-right').toggleClass('d-none');
            $(this).find('.fa-angle-down').toggleClass('d-none');
          });
        });
     
  
        $(document).ready(function(){
          $("#Blog-nav .flip").click(function(){
            $('#Blog-nav .panel').slideDown();
          });
        });
  
  
        $(document).ready(function(){
          // Lawyer Login
          $('#advRegisterButton').click(function(){
            $('#adv-login-upToggle').modal('hide');
            $('#adv-sign-upToggle').modal('show');
          });
  
          $('#advSigninButton').click(function(){
            $('#adv-sign-upToggle').modal('hide');
            $('#adv-login-upToggle').modal('show');
          });
  
          // User Login
          $('#registerButton').click(function(){
            $('#LoginToggle').modal('hide');
            $('#RegToggle').modal('show');
          });
  
          $('#signinButton').click(function(){
            $('#RegToggle').modal('hide');
            $('#LoginToggle').modal('show');
          });
  
          $('#signupButton').click(function(){
            $('#otpToggle').modal('hide');
            $('#RegToggle').modal('show');
          });
          
        });
        
  
        // <script>
        $(document).ready(function(){
            $('.for-active a').click(function(){
                $('a').removeClass('active')
            $(this).addClass('active')
            });
        });
    //  </script>