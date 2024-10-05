(function($){
    "use strict"

    //navbar drop when scroll
    // $(window).scroll(function(){
    //     if($(this).scrollTop() >200){
    //         $('.navbar').fadeIn('slow').css('display','flex');
    //     }else{
    //         $('.navbar').fadeOut('slow').css('display','none');
    //     }
    // });

    //typed text
    if($('.typed-text-output').length == 1){
        var typedStrings= $('.typed-text').text();
        var typed= new Typed('.typed-text-output',{
            strings:typedStrings.split(', '),
            typeSpeed:100,
            backspeed:20,
            smartBackspace:true,
            loop:true
        });

    

    

    }
})(jQuery);