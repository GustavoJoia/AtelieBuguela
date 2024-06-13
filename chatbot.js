//Array de textos para o chatbot
var informations = ['Sim. A nossa loja física localiza-se na Rua São João, 200, São Paulo - 08550-380.',
    'Das 08h às 18h.',
    'Compras acima de R$129,90 são a pronta-entrega. É possível a retirada no horário de funcionamento da loja.',
    'O frete tem custo fixo de R$15,00.']

/*Manipulação de elementos: modais e interação*/
$(document).ready(function () {
    $("#icon-chat").on("click", function () {
        setTimeout(function () {
            $('#chatbot').fadeToggle(1000);
        }, 1000);
    });

    $(".option-button").on("click", function () {
        var buttonId = $(this).attr("id");
        var message = "";

        switch (buttonId) {
            case "loja":
                message = informations[0];
                break;
            case "entrega":
                message = informations[2];
                break;
            case "frete":
                message = informations[3];
                break;
            case "horario":
                message = informations[1];
                break;
            default:
                message = "Opção desconhecida";
                break;
        }

        $("#text-chatbot").fadeOut(500, function () {
            $(this).css('font-size', '1rem');
            $(this).text(message).fadeIn(500);
        });
    });
});