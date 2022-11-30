$(document).ready(function () {

    //Parallax

    setTimeout(function () {

        $('#intro').parallax({ imageSrc: 'img/banner1.png' });

    }, 250);

    setTimeout(function () {

        $('#inst-area').parallax({ imageSrc: 'img/pattern.png' });

    }, 250);

    setTimeout(function () {

        $('#service-section').parallax({ imageSrc: 'img/banner1.png' });

    }, 250);

    setTimeout(function () {

        $('#software-section').parallax({ imageSrc: 'img/pattern-3.png' });

    }, 250);

    setTimeout(function () {

        $('#outsourcing-section').parallax({ imageSrc: 'img/pattern-4.png' });

    }, 250);

    setTimeout(function () {

        $('#contacts-section').parallax({ imageSrc: 'img/banner1.png' });

    }, 250);

    setTimeout(function () {

        $('#blogIntro').parallax({ imageSrc: 'img/banner1.png' });

    }, 250);

    setTimeout(function () {

        $('#blogIntro').parallax({ imageSrc: 'img/banner1.png' });

    }, 250);

    // Scrool para Seções

    let navBtn = $('.nav-item');

    let historySection = $('#history-area');
    let divisionSection = $('#services_btn_area')
    let softwareSection = $('#software-top');
    let stfSection = $('.btn_modules_stf');
    let capDonationSection = $('.module-outsourcing');
    let supervisionSection = $('.module-supervision');
    let homeOfficeSection = $('.module-home-office');
    let pbxOPSection = $('.module-pbx-op');
    let sacSection = $('.module-sac');
    let sgaSection = $('.module-sga');
    let blogSection = $('#blog-area');
    let scrollTo = '';

    $(navBtn).click(function () {

        let btnID = $(this).attr('id');

        console.log(btnID);

        if (btnID == 'icon-inst') {
            scrollTo = historySection;
        } else if (btnID == 'icon-div') {
            scrollTo = divisionSection
        } else if (btnID == 'service-nav') {
            scrollTo = softwareSection
        } else if (btnID == 'icon-services') {
            scrollTo = stfSection
        } else if (btnID == 'icon-cap') {
            scrollTo = capDonationSection
        } else if (btnID == 'icon-sup') {
            scrollTo = supervisionSection
        } else if (btnID == 'icon-home-office') {
            scrollTo = homeOfficeSection
        } else if (btnID == 'icon-pbx-op') {
            scrollTo = pbxOPSection
        } else if (btnID == 'icon-sac') {
            scrollTo = sacSection
        } else if (btnID == 'icon-sga') {
            scrollTo = sgaSection
        } else if (btnID == 'blog-nav') {
            scrollTo = blogSection
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

    });

    // Fecha o menu responsivo quando o gatilho de rolagem é ativado
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Ative scrollspy para adicionar classe ativa aos itens da barra de navegação na rolagem
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Recolher se a página não estiver no topo
    navbarCollapse();
    // Recolher a barra de navegação quando a página for rolada
    $(window).scroll(navbarCollapse);

    // Fecha o menu responsivo quando o gatilho de rolagem é ativado
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Ative scrollspy para adicionar classe ativa aos itens da barra de navegação na rolagem
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("img#logo").css({
                "width": "45px",
                "margin": "10px 10px 10px 30px",

            });
            $("#navbar-name").css({
                "font-size": "25px",
                "margin": "20px 0 5px 15px",
            });

        } else { // Caso o scroll seja inferior ao topo das descrições de serviços, a posição permanece a mesma já inserida no css.
            $("img#logo").css({
                "width": "",
                "margin": "",
            });
            $("#navbar-name").css({
                "margin": "",
            });
        }

    };
    // ecolher se a página não estiver no topo
    navbarCollapse();
    // Recolher a barra de navegação quando a página for rolada
    $(window).scroll(navbarCollapse);


    //Menu Responsivo

    let show = true;

    const menuSection = document.querySelector(".menu-section")
    const menuToggle = menuSection.querySelector(".menu-toggle")

    menuToggle.addEventListener("click", () => {

        document.body.style.overflow = show ? "hidden" : "initial"

        menuSection.classList.toggle("on", show)
        show = !show;
    })


    //Script habilitar o Menu responsivo

    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 992) {
            $('#menuRes').removeClass('collapse navbar-collapse justify-content-end');
        } else if (ww >= 993) {
            $('#menuRes').addClass('collapse navbar-collapse justify-content-end');
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    alterClass();
    


});

