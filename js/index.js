const toggle = document.querySelector('#toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.closeBtn');
const darkOverlay = document.querySelector('.dark-overlay');

toggle.addEventListener('click', function () {
darkOverlay.classList.add('active');
sidebar.classList.add('is-active');
});

closeBtn.addEventListener('click', function () {
darkOverlay.classList.remove('active');
sidebar.classList.remove('is-active');
});

window.addEventListener('click', function (e) {
if (e.target == darkOverlay) {
    darkOverlay.classList.remove('active');
    sidebar.classList.remove('is-active');
}
})

$(document).ready(function () {
    $('.work-tabs li').on('click', function () {
        $('.work-tabs li.active').removeClass('active');
        $(this).addClass('active');

        var x = $(this).attr('data-id');
        console.log(x);
        console.log('#' + x);

        $('.portfolio.active').fadeOut(500, showNext);

        function showNext() {
            $(this).removeClass('active');
            $("#" + x).fadeIn(500, function () {
                $(this).addClass('active');
            })
        }
    })
});

var scroll = new SmoothScroll('a[href*="#"]');
