$(document).ready(function()
{
    if ($(window).width() <= 767)
    {
        $('.list-view').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 400,
            dots: false,
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: false,
                        dots: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        centerMode: false,
                        dots: false,
                        slidesToShow: 1
                    }
                },
                ]
        })
    }
});
function numberWithCommas(x)
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
$('.count').each(function()
{
    $(this).prop('Counter', 10).animate({ Counter: $(this).text() }, {
        duration: 3000,
        easing: 'swing',
        step: function(now)
        {
            $(this).text(numberWithCommas(Math.ceil(now)))
        }
    })
});