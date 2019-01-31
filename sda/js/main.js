$(document).ready(function(){

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
  centerMode: true,
  prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><img src="img/icons/left-2.png"></a>',
  nextArrow: '<a data-role="none" class="slide-next" tabindex="0" role="button"><img src="img/icons/right-2.png"></i></a>',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        arrows:false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }
  ]
});
  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');

  // toggle menu 
  $(".toggle-menu").on('click', function() {
    $(this).parent().parent().toggleClass('open-menu');
  });

  $nav.on("click", "a", function () {
    $header_top.removeClass('open-menu');
  });

  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: ['#212121', '#212121', '#212121', '#212121', '#212121','#212121', '#212121', '#212121', '#212121', '#212121'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors: ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6', 'sec7', 'sec8','sec9'],
    menu: '#menu',
    navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],

    
    afterLoad : function(anchorLink, index){
      $("#fp-nav ul li .fp-tooltip").css("color","#6c6c6c");
      $("#fp-nav ul li .active, .fp-slidesNav ul li .active").next().css({"color":"#fff", "transition":".5s"});
      $(".fp-viewing-"+anchorLink+" #fp-nav ul li .active, .fp-viewing-"+anchorLink+" .fp-slidesNav ul li .active").next().css({"color":"#fff", "transition":".5s"});
      $(".fp-viewing-"+anchorLink+"-0 #fp-nav ul li .active, .fp-viewing-"+anchorLink+"-0 .fp-slidesNav ul li .active").next().css({"color":"#fff", "transition":".5s"});
      
      if(index == 6 || index == 7 || index == 8){
          $(".dots-container").html($(".active .fp-slidesNav").html());
          $(".slide-nav").fadeIn(160);
        }else{
          $(".slide-nav").fadeOut(160);
        }
      if(index == 9){
        $(".down-btn").hide();
        $(".top-btn").fadeIn(500);
      }else{
        $(".down-btn").fadeIn(500);
        $(".top-btn").hide();
      }
      $(".static-info .master-info").hide();
      $(".static-info .master-info").html($(".masters .active .master-info").html()).fadeIn(500);
    },
    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      $(".static-info .master-info").hide();
      $(".fp-viewing-"+anchorLink+"-"+slideIndex+" #fp-nav ul li .active, .fp-viewing-"+anchorLink+"-"+slideIndex+" .fp-slidesNav ul li .active").next().css("color","#fff");
      $(".dots-container").html($(".active .fp-slidesNav").html());
      $(".static-info .master-info").html($(".masters .active .master-info").html()).fadeIn(600);
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      $("#fp-nav ul li .fp-tooltip").css("color","#6c6c6c");
      $(".fp-viewing-sec"+index+" #fp-nav ul li .active, .fp-viewing-sec1"+index+" .fp-slidesNav ul li .active").next().css("color","#fff");
    } 
  });
  $(".down-btn").on("click",function(){
    $.fn.fullpage.moveSectionDown();
  });
  $(".next-slide").on("click", function(){
    $.fn.fullpage.moveSlideRight()
  });
  $(".prev-slide").on("click", function(){
    $.fn.fullpage.moveSlideLeft()
  });
   
});