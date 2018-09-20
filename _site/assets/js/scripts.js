"use strict";

// Stuff to perform on page load
$(function () {
    // Initialises Bootstrap's tooltips component
    $('[data-toggle="tooltip"]').tooltip();

    // Cool scroll effect is run on start up and upon window scroll
    setUpCoolScrollEffect();
    $(window).scroll(setUpCoolScrollEffect);

    /**
     * Displays a success message when user submits the contact form.
     */
    $("#contactForm").submit(function (e) {
        // TODO: perform form validation here

        e.preventDefault();

        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).done(function () {
            $('#contactSuccessModal').modal('show');
        });
    });

    // setTimeout(function(){
    //     $('body').addClass('loaded');
    // }, 1000);
})

/**
 * Provides a nice scroll animation to any element 
 * containing the 'scroll_hidden' class
 */
function setUpCoolScrollEffect() {
    $('.scroll_hidden').each(function () {
        $(this).isInViewport()
            .removeClass('scroll_hidden')
            .addClass('scroll_visible');
    });
}