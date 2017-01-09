/**
 * Created by admin on 2017/1/3.
 */
window.onload=function(){

    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    var currentQuote = '', currentAuthor = '';
    function getQuote() {
        $.ajax({
            headers: {
                "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V"
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
            success: function(response) {
                var r = JSON.parse(response);
                currentQuote = r.quote;
                currentAuthor = r.author;
                $(".quote-text").animate({
                        opacity: 0
                    }, 100,
                    function() {
                        $(this).animate({
                            opacity: 1
                        }, 100);
                        $('#text').text(r.quote);
                    });

                $(".quote-author").animate({
                        opacity: 0
                    }, 100,
                    function() {
                        $(this).animate({
                            opacity: 1
                        }, 100);
                        $('#author').html(r.author);
                    });

                var color = Math.floor(Math.random() * colors.length);
                console.log(color);
                $("body").animate({
                    backgroundColor: colors[color],
                    color: colors[color]
                }, 100);
                $(".button").animate({
                    backgroundColor: colors[color]
                }, 100);
            }
        });
    }


    $(document).ready(function() {
        getQuote();
        $('#new-quote').on('click', getQuote);

    });


}