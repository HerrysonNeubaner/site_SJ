
//Fixação da Breadcrumbs nas rolagens

$(window).scroll(function () {
    var targt = $("#fix-guide").offset().top; //Declaração da variável para calcular o topo da descrição dos serviços
    if ($(this).scrollTop() >= targt) { // Após o scrool passar da variável, a posição do do guide é alterada paa fixa 
        $("div#guide").css({
            "position": "fixed",

        });
    } else { // Caso o scroll seja inferior ao topo das descrições de serviços, a posição permanece a mesma já inserida no css.
        $("div#guide").css({
            "position": "",
        });
    }
});

$(window).scroll(function () {
    var targt = $("#fix-guide").offset().top; //Declaração da variável para calcular o topo da descrição dos serviços
    if ($(this).scrollTop() >= targt) { // Após o scrool passar da variável, a posição do do guide é alterada paa fixa 
        $("div#guide-cap").css({
            "position": "fixed",

        });
    } else { // Caso o scroll seja inferior ao topo das descrições de serviços, a posição permanece a mesma já inserida no css.
        $("div#guide-cap").css({
            "position": "",
        });
    }
});



