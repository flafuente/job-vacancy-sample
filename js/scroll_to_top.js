$(document).ready(function () {
    $('.backtotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

});