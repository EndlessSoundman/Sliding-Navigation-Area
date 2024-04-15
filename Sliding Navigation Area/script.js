

var menuIcon = document.getElementById('menuIcon');
var closeIcon = document.getElementById('closeIcon');
var navElement = document.getElementById('navElement');






menuIcon.addEventListener('click', function() {
    

    closeIcon.classList.remove('hidden');
    navElement.classList.add('shownav');

    
    menuIcon.classList.add('hidden');
});


closeIcon.addEventListener('click', function() {
    
    menuIcon.classList.remove('hidden');
    navElement.classList.remove('shownav');

    
    closeIcon.classList.add('hidden');
});
