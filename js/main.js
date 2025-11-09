/*  ---------------------------------------------------
    Template Name: Phozogy
    Description:  Phozogy photography HTML Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */
// Add this JavaScript for mobile menu functionality and header scroll effect
// Mobile menu functionality


document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".adk-portfolio-grid");
  const items = Array.from(grid.children);

  // Shuffle items randomly
  const shuffled = items.sort(() => Math.random() - 0.5);

  // Clear and re-append in random order
  grid.innerHTML = "";
  shuffled.forEach(item => grid.appendChild(item));
});

   // Filter functionality
        const filterItems = document.querySelectorAll('.adk-filter-item');
        const portfolioItems = document.querySelectorAll('.adk-portfolio-item');

        filterItems.forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                filterItems.forEach(f => f.classList.remove('adk-active'));
                // Add active class to clicked item
                this.classList.add('adk-active');

                const filterValue = this.getAttribute('data-filter');

                portfolioItems.forEach(portfolioItem => {
                    if (filterValue === 'all') {
                        portfolioItem.classList.remove('adk-hidden');
                    } else {
                        if (portfolioItem.getAttribute('data-category') === filterValue) {
                            portfolioItem.classList.remove('adk-hidden');
                        } else {
                            portfolioItem.classList.add('adk-hidden');
                        }
                    }
                });
            });
        });

        // Lightbox functionality
        const lightbox = document.getElementById('adkLightbox');
        const lightboxImg = document.getElementById('adkLightboxImg');
        const closeBtn = document.querySelector('.adk-lightbox-close');

        portfolioItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                lightboxImg.src = imgSrc;
                lightbox.classList.add('adk-active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeLightbox();
        });

        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        function closeLightbox() {
            lightbox.classList.remove('adk-active');
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('adk-active')) {
                closeLightbox();
            }
        });
// main
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.adr-hamburger');
    const mobileMenu = document.querySelector('.adr-mobile-menu');
    const mobileClose = document.querySelector('.adr-mobile-close');
    const mobileLinks = document.querySelectorAll('.adr-mobile-nav a');

    // Open mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close mobile menu
    if (mobileClose) {
        mobileClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

// Counter Animation
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.adr-stat-number');
    let animated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2500;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        });
    };

    // Intersection Observer for scroll animation
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateCounters();
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.adr-stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    // Isotppe Filter
    $(".filter-controls li").on('click', function() {
        var filterData = $(this).attr("data-filter");

        $(".portfolio-filter, .gallery-filter").isotope({
            filter: filterData,
        });

        $(".filter-controls li").removeClass('active');
        $(this).addClass('active');
    });

    $(".portfolio-filter, .gallery-filter").isotope({
        itemSelector: '.pf-item, .gf-item',
        percentPosition: true,
        masonry: {
        // use element for option
        columnWidth: '.pf-item, .gf-item',
        horizontalOrder: true,
      }
    });

    //Masonary
    $('.portfolio-details-pic').masonry({
        itemSelector: '.pdp-item',
        columnWidth: '.pdp-item'
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".categories-slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        dots: false,
        nav: true,
        navText: ['<span class="arrow_carrot-left"></span>', '<span class="arrow_carrot-right"></span>'],
        stagePadding: 120,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            768: {
                items: 2,
                stagePadding: 0
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

})(jQuery);

// number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
    
  
  });