const icon = document.getElementById('arrow-icon');

  window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { 
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    var interval1, interval2, interval3, interval4; 
    
    var count = document.getElementById("counth3");
    var count1 = document.getElementById("810");
    var count2 = document.getElementById("2000");
    var count3 = document.getElementById("20");
    
    var valid1 = true, valid2 = true, valid3 = true, valid4 = true;
    
    window.addEventListener('scroll', function() {
      var i = 0;
      if (isInViewport(count) && !interval1 && valid1) { 
        interval1 = setInterval(() => {
          count.innerText = i;
          if (i >= 8000) {
            clearInterval(interval1);
            valid1 = false;
          }
          i += 100;
        }, 20);
      }
      var q = 0;
      if (isInViewport(count1) && !interval2 && valid2) { 
        interval2 = setInterval(() => {
          count1.innerText = q;
          if (q >= 810) {
            clearInterval(interval2);
            valid2 = false;
          }
          q += 10;
        }, 20);
      }
      var t = 0;
      if (isInViewport(count2) && !interval3 && valid3) { 
        interval3 = setInterval(() => {
          count2.innerText = t;
          if (t >= 2000) {
            clearInterval(interval3);
            valid3 = false;
          }
          t += 20;
        }, 20);
      }
      var f = 0;
      if (isInViewport(count3) && !interval4 && valid4) { 
        interval4 = setInterval(() => {
          count3.innerText = f;
          if (f >= 20) {
            clearInterval(interval4);
            valid4 = false;
          }
          f += 1;
        }, 1);
      }
    });
    

    
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 2,
    margin :20,
    nav : true ,
    navText: ['<i class="fa-solid fa-arrow-left  text-center mt-5  rounded-start-pill px-4 m-0 me-5 border border-1 border-primary py-2 bg-primary text-white"></i>', '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-0 border border-1 border-primary bg-primary text-white"></i>'],
  }
  );
});
