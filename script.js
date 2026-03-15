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

  
  