window.addEventListener('scroll',function()
 {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function togglemenu()
{
    var menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active')

}