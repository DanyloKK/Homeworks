"use strict";

$(document).ready(function () {
  var form = $(".js--form");
  var button = $(".btn-success");
  var inputForm = $(".js--form__input");
  var list = $(".js--todos-wrapper");
  var modal = $(".modal");
  var body = $("body");
  var modalTask = $("#todoDetails");
  var buttonClose = $(".btn-close");
  var container = $(".container");
  $(form).on("submit", function (e) {
    e.preventDefault();
    var inputValue = inputForm.val();
    if (inputValue) {
      var createLi = $("<li></li>");
      $(createLi).addClass("list-group-item d-flex align-items-center justify-content-between");
      var createCheckBox = $("<input>");
      $(createCheckBox).attr("type", "checkbox").addClass("form-check-input");
      var createSpan = $("<span></span>").addClass("ms-2 todo-item__description");
      createSpan.text(inputValue);
      $(list).append(createLi);
      $(createLi).append(createCheckBox);
      $(createLi).append(createSpan);
      var deleteButton = $("<button>").addClass("btn btn-danger btn-sm").text("Видалити");
      $(createLi).append(deleteButton);
      inputForm.val("");
      $(deleteButton).on("click", function (e) {
        $(createLi).remove();
      });
      $(createLi).on("click", function (e) {
        $(modal).addClass("modal-show");
        $(body).addClass("background");
        var textSpan = createSpan.text();
        $(modalTask).text(textSpan);
        $(container).addClass("style");
        $(buttonClose).on("click", function () {
          $(modal).removeClass("modal-show");
          $(body).removeClass("background");
          $(container).removeClass("style");
        });
      });
    }
  });
});