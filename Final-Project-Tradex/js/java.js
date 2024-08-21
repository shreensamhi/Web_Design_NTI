const arrow = document.getElementById('arrow-link');
const icon = document.getElementById('arrow-icon');

    arrow.addEventListener('click', function(event) {
        event.preventDefault(); 
        document.querySelector('#headertop').scrollIntoView({ behavior: 'smooth' });
        icon.style.display = 'none'; 
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { 
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });