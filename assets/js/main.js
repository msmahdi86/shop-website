// (function($) {
//     "use strict";

//     // Back to top button
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 100) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });

// //code jadid 


// })(jQuery);




// timer in index.html
const countDown = () => {

    const countDate = new Date('may 17, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second); 

    document.querySelector('.days').innerText = textDay;
    document.querySelector('.hours').innerText = textHour;
    document.querySelector('.minutes').innerText = textMinute;
    document.querySelector('.seconds').innerText = textSecond;
}
setInterval(countDown, 1000)