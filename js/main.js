$(document).ready(function(){

  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    centerMode: false,
    prevArrow: '<a data-role="none" class="slide-prev" tabindex="0" role="button"><img src="img/icons/left-2.png"></a>',
    nextArrow: '',
    autoplay: true,
    responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        prevArrow:"",
        centerMode: false
      }
    }
    ]
  });

  $('.master-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    adaptiveHeight: true,
    arrows:false,
    responsive: [
    {
      autoplay: true,
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });;
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

  $("[data-fancybox]").fancybox({
    closeClickOutside : false
  });


  // fullpage customization
  $('#fullpage').fullpage({
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
      
      if(index == 7 || index == 8){
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
  $(".master-item").height($(".master-item").width());

});