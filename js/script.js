$(document).ready(function(){
    $('a.nav-link.menu1').addClass('aktif');
});
$('a.nav-link').click(function(){
    $('a.nav-link').removeClass('aktif');
    $(this).addClass('aktif');
});