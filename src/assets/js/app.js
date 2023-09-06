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

$(function() {
  $(".pif-inner__hide").on('show.bs.collapse', function() {
    $('.js-open-pif-adv').find('span').text('Свернуть')
    $(this).parent().find('.pifs-adv__ellipsis').addClass('is-hide')
  })
});
$(".pif-inner__hide").on("hide.bs.collapse", function(){
  $('.js-open-pif-adv').find('span').text('Подробнее')
  $(this).parent().find('.pifs-adv__ellipsis').removeClass('is-hide')
});

// anchors
$(() => {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})


// mobile menu
$(() => {
  const btnMenu = document.querySelector('.js-toggle-mobile-menu');
  const menu = document.querySelector('.js-mobile-menu');
  const body = document.querySelector('body');
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('is-active')
      menu.classList.toggle('is-open');
      body.classList.toggle('opened-menu')
    });
});
