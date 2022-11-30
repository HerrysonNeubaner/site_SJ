$(window).scroll(function () {
    var targt = $("#wa_btn_start").offset().top; //Declaração da variável para calcular o topo da descrição dos serviços
    if ($(this).scrollTop() >= targt) { // Após o scrool passar da variável, a posição do do guide é alterada paa fixa 
        $("div#wa_btn").css({
            "display": "block",

        });
    } else { // Caso o scroll seja inferior ao topo das descrições de serviços, a posição permanece a mesma já inserida no css.
        $("div#wa_btn").css({
            "display": "none",
        });
    }
});

$(window).scroll(function () {
    var targt = $("#wa_btn_end").offset().top; //Declaração da variável para calcular o topo da descrição dos serviços
    if ($(this).scrollTop() >= targt) { // Após o scrool passar da variável, a posição do do guide é alterada paa fixa 
        $("div#wa_btn").css({
            "display": "none",
        });
    }
});