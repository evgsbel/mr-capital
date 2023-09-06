"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// open pifs advantages
// $('.js-open-pif-adv').click(function () {
//   $(this)
//     .parent()
//     .next()
//     .addClass('is-open')
//   $(this).parent().next()[0].scrollIntoView({block: "start", behavior: "smooth"})
// })
// $('.js-close-pif-adv').click(function () {
//   $(this)
//     .parent()
//     .removeClass('is-open')
//
// })

$(function () {
  $(".pif-inner__hide").on('show.bs.collapse', function () {
    $('.js-open-pif-adv').find('span').text('Свернуть');
    $(this).parent().find('.pifs-adv__ellipsis').addClass('is-hide');
  });
});
$(".pif-inner__hide").on("hide.bs.collapse", function () {
  $('.js-open-pif-adv').find('span').text('Подробнее');
  $(this).parent().find('.pifs-adv__ellipsis').removeClass('is-hide');
});

// anchors
$(function () {
  var anchors = document.querySelectorAll('a[href*="#"]');
  var _iterator = _createForOfIteratorHelper(anchors),
    _step;
  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href').substr(1);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

// mobile menu
$(function () {
  var btnMenu = document.querySelector('.js-toggle-mobile-menu');
  var menu = document.querySelector('.js-mobile-menu');
  var body = document.querySelector('body');
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('is-active');
    menu.classList.toggle('is-open');
    body.classList.toggle('opened-menu');
  });
});