$(window).on("scroll", function() {

    var currentPos = $(window).scrollTop();

    $('nav ul li a').each(function() {
        var sectionLink = $(this);
        var section = $(sectionLink.attr('href'));
        if(section.position().top <= currentPos && sectionLink.offset().top + section.height() >= currentPos) {
            $('nav ul li').removeClass('active');
            sectionLink.parent().addClass('active');
        }
        else {
            sectionLink.parent().removeClass('active');
        }
    });

});