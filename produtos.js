$(document).ready(function () {
    // Carregar dados do arquivo JSON
    $.getJSON("produtos.json", function (data) {
        // Iterar sobre os produtos
        data.produtos.forEach(function (produto) {
            var productHtml = `
                <div class="product">
                    <img class="all-products" src="${produto.url}" alt="${produto.nome}">
                    <p class="product-name">${produto.nome}</p>
                    <p class="product-value">${produto.valor}</p>
                </div>
            `;
            $("#all-products").append(productHtml);
        });
    });
});

$(document).ready(function () {
    $("#click-product").on("click", function () {
        setTimeout(function () {
            $('#others-products').fadeToggle(1000);
        }, 700);
    });

    $("#close").on("click", function () {
        setTimeout(function () {
            $('#others-products').fadeToggle(1000);
        }, 700);
    });
});