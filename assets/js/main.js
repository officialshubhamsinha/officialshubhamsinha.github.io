(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        var homepageArea = $('.homepage-area');
            homepageArea.owlCarousel({
               items:1,
                dots:true,
                autoplay:true,
                autoplayTimeout:1300,
                nav:true,
                loop:true,
                navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], 
            });

            homepageArea.on('translate.owl.carousel', function(event) {
                $(".homepage-text h4").removeClass("animated bounceIn");
                $(".homepage-text h1").removeClass("animated jackInTheBox");
                $(".homepage-text p").removeClass("animated fadeIn");
            });

            homepageArea.on('translated.owl.carousel', function(event) {
                $(".homepage-text h4").addClass("animated bounceIn");
                $(".homepage-text h1").addClass("animated jackInTheBox");
                $(".homepage-text p").addClass("animated fadeIn");
            });


        });


    jQuery(window).load(function(){

        
    });


}(jQuery));	