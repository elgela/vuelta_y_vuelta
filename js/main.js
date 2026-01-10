(function ($) {
    "use strict";
    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 250, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    var currentUrl = window.location.href;
    var navLinks = document.querySelectorAll('nav div a');

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});

////////// envio mail desde formulario ///////////////
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nombre: form.name.value,
    email: form.email.value,
    asunto: form.asunto.value,
    message: form.message.value
  };

  const res = await fetch("https://formspree.io/f/mbddrykj", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("¡Mensaje enviado con éxito!");
    form.reset();
  } else {
    alert("Error al enviar el mensaje.");
  }
});
