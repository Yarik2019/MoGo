
$(function(){
    let header  = $('#header');
    let introH = $('#intro').innerHeight();
    let scrollOffset = $(window).scrollTop();
    
    /* header fixed */
    checlScroll(scrollOffset);

    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        
        checlScroll(scrollOffset)
    });


    function checlScroll(scrollOffset){
    

        if(scrollOffset >= introH){

            header.addClass("fixed");
   
        }else{
            header.removeClass("fixed");
        }

    }

    /* Smooth scroll */

    $('[data-scroll]').on('click', function(event){

        event.preventDefault();
        let $this = $(this)
        let blockId = $this.data('scroll');
        let   blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active')

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500)

    })

    /* menu nav Toggle */

    $('#nav__toggel').on('click', function(event){
        event.preventDefault();

        $('#nav').toggleClass('active');
     
        $(this).toggleClass('active')
        
    })


    /* callapse*/

    $('[data-callapse]').on('click', function(event){
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('callapse');

        $this.toggleClass('active').s;
        
    
    });

    /* slider */

    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })

})