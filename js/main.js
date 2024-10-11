;(function () {

    'use strict';

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    var fullHeight = function () {

        if (!isMobile.any()) {
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height());
            });
        }
    };

    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };

    var pieChart = function () {
        $('.chart').easyPieChart({
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'butt',
            barColor: '#FF9000',
            trackColor: "#f5f5f5",
            size: 160,
            animate: 1000
        });
    };

    var skillsWayPoint = function () {
        if ($('#fh5co-skills').length > 0) {
            $('#fh5co-skills').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(pieChart, 400);
                    $(this.element).addClass('animated');
                }
            }, {offset: '90%'});
        }

    };


    // Loading page
    var loaderPage = function () {
        $(".fh5co-loader").fadeOut("slow");
    };


    $(function () {
        goToTop();
        loaderPage();
        fullHeight();
        parallax();
        // pieChart();
        skillsWayPoint();
    });

}());
