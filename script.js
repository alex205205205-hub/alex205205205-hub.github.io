document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('active');

        // Меняем иконки
        if (menu.classList.contains('active')) {
          btn.innerHTML = '<i class="ri-close-line"></i>';
        } else {
          btn.innerHTML = '<i class="ri-menu-line"></i>';
        }
      });
    }
  });


// Функция инициализации карты
  ymaps.ready(function() {
    // Создаем карту
    var myMap = new ymaps.Map("map", {
      center: [54.986940, 73.375529], // координаты 
      zoom: 10 // уровень масштабирования
    });

    // Создаем метку
    var myPlacemark = new ymaps.Placemark([54.986940, 73.375529], {
      hintContent: 'Это моя метка',
      balloonContent: 'Описание метки'
    });

    // Добавляем метку на карту
    myMap.geoObjects.add(myPlacemark);
  });
  
