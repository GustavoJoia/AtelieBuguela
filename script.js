document.querySelector('.carousel-control.prev').addEventListener('click', function() {
    // Mover para a imagem anterior
    var currentTransform = parseInt(document.querySelector('.carousel-inner').style.transform.replace('translateX(', '').replace('%)', '')) || 0;
    currentTransform += 100;
    if (currentTransform > 0) currentTransform = -200;
    document.querySelector('.carousel-inner').style.transform = `translateX(${currentTransform}%)`;
});

document.querySelector('.carousel-control.next').addEventListener('click', function() {
    // Mover para a próxima imagem
    var currentTransform = parseInt(document.querySelector('.carousel-inner').style.transform.replace('translateX(', '').replace('%)', '')) || 0;
    currentTransform -= 100;
    if (currentTransform < -200) currentTransform = 0;
    document.querySelector('.carousel-inner').style.transform = `translateX(${currentTransform}%)`;
});