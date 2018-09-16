"use strict";

$(function () {

    /**
     * Provides a nice scroll animation to any element 
     * containing the 'scroll_hidden' class
     */
    var coolScroll = function () {
        $('.scroll_hidden').each(function () {
            $(this).isInViewport()
                .removeClass('scroll_hidden')
                .addClass('scroll_visible');
        });
    }

    // Cool scroll is run on start up and upon window scroll
    coolScroll();
    $(window).scroll(coolScroll);

    // Initialises Bootstrap's tooltips component
    $('[data-toggle="tooltip"]').tooltip()
})