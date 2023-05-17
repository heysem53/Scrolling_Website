let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains = document.getElementById('mountains');
let earth = document.getElementById('earth');
let printizayn = document.querySelector('.printizayn');

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + 'px'; 
    moon.style.top = value * 3 + 'px'; 
    mountains.style.top = value * 1  + 'px';
    printizayn.style.fontSize = value + 'px';
       if (scrollY >= 120) {
        printizayn.style.fontSize = 120 + 'px';
        /*printizayn.style.position = 'fixed';
        if (scrollY >= 440) {
            printizayn.style.display = 'none';
          }else {
              printizayn.style.display = 'block';
          }*/
       }
         
         if (scrollY >= 100) {
              document.querySelector('.main').style.background = 'linear-gradient(#231c6e,#4a37df)'
          } else{
              document.querySelector('.main').style.background = 'linear-gradient(#07023c,#180c74)'
                }

    }


