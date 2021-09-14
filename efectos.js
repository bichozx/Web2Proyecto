window.addEventListener('load', function() {

    console.log("hola bicho idiota");

    const body = document.querySelector('body');

    const imag = [
        'url("./ImgProyu/eva02.jpg")',
        'url("./ImgProyu/eva10.jpg")',
        'url("./ImgProyu/eva12.jpg")',
        'url("./ImgProyu/eva13.jpg")',
    ];
    const salida = 0;


    function cambio() {

        const bg = imag[Math.floor(Math.random() * imag.length)]
        body.style.backgroundImage = bg;

    }

    setTimeout(cambio, 2000);




})