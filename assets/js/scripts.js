"use strict";

// Stuff to perform on page load
$(function () {
    // Initialises Bootstrap's tooltips component
    $('[data-toggle="tooltip"]').tooltip();

    // Cool scroll effect is run on start up and upon window scroll
    setUpCoolScrollEffect();
    $(window).scroll(setUpCoolScrollEffect);
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

/**
 * Displays a success message when user submits the contact form.
 */
function submitContactForm(event) {
    // TODO: perform validation
    event.preventDefault();
    $('#contactSuccessModal').modal('show');
}