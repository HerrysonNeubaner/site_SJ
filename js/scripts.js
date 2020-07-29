$(document).ready(function () {

    //Parallax

    setTimeout(function () {

        $('#apply-area').parallax({ imageSrc: 'img/pattern.png' });

    }, 250);

    setTimeout(function () {

        $('#inst-area').parallax({ imageSrc: 'img/pattern.png' });

    }, 250);

    setTimeout(function () {

        $('#service-section').parallax({ imageSrc: 'img/pattern-6.png' });

    }, 250);

    setTimeout(function () {

        $('#software-section').parallax({ imageSrc: 'img/pattern-3.png' });

    }, 250);

    setTimeout(function () {

        $('#outsourcing-section').parallax({ imageSrc: 'img/pattern-4.png' });

    }, 250);

    setTimeout(function () {

        $('#contacts-section').parallax({ imageSrc: 'img/pattern-5.png' });

    }, 250);

    setTimeout(function () {

        $('#clients-section').parallax({ imageSrc: 'img/pattern-2.png' });

    }, 250);
    
    // Scrool para Seções

    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let clientsSection = $('#clients-area');
    let contactSection = $('#contact-area');
    let historySection = $('#history-area');
    let divisionSection = $('#division-area')
    let softwareSection = $('#software-top');

    let scrollTo = '';

    $(navBtn).click(function () {

        let btnID = $(this).attr('id');

        console.log(btnID);

        if (btnID == 'ist-menu') {
            scrollTo = aboutSection;
        } else if (btnID == 'services-menu') {
            scrollTo = servicesSection;
        } else if (btnID == 'clients-menu') {
            scrollTo = clientsSection;
        } else if (btnID == 'contact-menu') {
            scrollTo = contactSection;
        } else if (btnID == 'icon-inst') {
            scrollTo = historySection;
        } else if (btnID == 'icon-div') {
            scrollTo = divisionSection
        } else if (btnID == 'service-nav') {
            scrollTo = softwareSection
        } else {
            scrollTo = bannerSection
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

    });

    $('#serviceCarousel').carousel({
        interval: 5000
    
    });


});

