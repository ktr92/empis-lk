document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.contact__call').addEventListener('click', (event) => {
    event.preventDefault()
    if (event.currentTarget.classList.contains('active')) {
      event.currentTarget.classList.remove('active')
      document.querySelector('.contact__content').classList.remove('active')
    } else {
      event.currentTarget.classList.add('active')
      document.querySelector('.contact__content').classList.add('active')
    }

  })


});



$(document).ready(function () {


  function init() {

  };

  init();

  $(window).on('resize', function () {
    init()
  });



  $("input[type=tel]").mask("+7 (999) 999 99 99");

  $("a.scrollTo").click(function () {

    var destination = $($(this).attr("href")).offset().top - 90;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1100);
    return false;
  });


})


document.querySelectorAll('.dropdown').forEach(function (item) {
  item.addEventListener('click', event => {

    if (event.target.classList.contains('dropdown__label')) {
      if (item.querySelector('.dropdown__menu').classList.contains('active')) {
        item.querySelector('.dropdown__menu').classList.remove('active')
        item.querySelector('.dropdown__label').classList.remove('active')
      } else {
        item.querySelector('.dropdown__menu').classList.add('active')
        event.target.classList.add('active')
      }

    } else if (event.target.tagName.toLowerCase() == 'li') {
      if (item.querySelector('li.selected')) {
        item.querySelector('li.selected').classList.remove('selected')
      }

      event.target.classList.add('selected')
      item.querySelector('.dropdown__label').classList.remove('active')
      item.querySelector('.dropdown__label').textContent = event.target.textContent
      item.querySelector('.dropdown_value').value = event.target.textContent
      item.querySelector('.dropdown__menu').classList.remove('active')
    }
  })
})



window.onclick = function (event) {
  var dropdown = document.querySelectorAll('.dropdown__label.active')
  dropdown.forEach(function (drop) {
    if (event.target != drop) {
      document.querySelectorAll('.dropdown__menu.active').forEach(function (item) {
        item.classList.remove('active')
      })
      document.querySelectorAll('.dropdown__label.active').forEach(function (item) {
        item.classList.remove('active')
      })
    }
  })
}