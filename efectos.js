window.addEventListener('load', function() {

    console.log("hola bicho idiota");

    const body = document.querySelector('body');

    const imag = [
        'url("./ImgProyu/eva10.jpg")',
        'url("./ImgProyu/eva12.jpg")',
        'url("./ImgProyu/eva13.jpg")',
        'url("./ImgProyu/eva15.jpg")',
        'url("./ImgProyu/eva16.jpg")',
        'url("./ImgProyu/eva17.png")',
        'url("./ImgProyu/eva18.jpg")',
        'url("./ImgProyu/eva19.png")',
        'url("./ImgProyu/eva20.jpg")',
    ];


    function cambio() {

        const bg = imag[Math.floor(Math.random() * imag.length)];
        body.style.backgroundImage = bg;

    }


    setTimeout(cambio, 1000);




})