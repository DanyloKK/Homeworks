$(document).ready(function () {
    const modal = $('.modal__window');
    const button = $(".btn-push")
    const closeBtn = $("#closeModalBtn");
    const closeButton = $(".modal__window-button")
    $(button).click(function () {
        $(modal).addClass("modal__show")
    })
    $(closeBtn).click(function () {
        $(modal).removeClass("modal__show")
    })
    $(closeButton).click(function () {
        $(modal).removeClass("modal__show")
    })
})