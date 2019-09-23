// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
$(document).ready(function(){
  hideAllShow();
});

function hideAllShow() {
  $("#js-show-car").hide();
  $("#js-show-oxxo").hide();
  $("#js-show-spei").hide();
}

function showAllShoww() {
  $("#js-hide-car").show();
  $("#js-hide-oxxo").show();
  $("#js-hide-spei").show();
}

function hideAllHide() {
  $("#js-show-car").hide();
  $("#js-show-oxxo").hide();
  $("#js-show-spei").hide();
}

function jsHideCar(){
  hideAllShow();
  showAllShoww();
  $("#js-hide-car").hide();
  $("#js-show-car").show();
}

function jsHideOxxo(){
  hideAllShow();
  showAllShoww();
  $("#js-hide-oxxo").hide();
  $("#js-show-oxxo").show();
}

function jsHideSpei(){
  hideAllShow();
  showAllShoww();
  $("#js-hide-spei").hide();
  $("#js-show-spei").show();
}
