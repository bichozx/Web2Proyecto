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



let arriba = document.getElementById('irarriba');
arriba.addEventListener("click", up);

function up() {

    let subir = document.documentElement.scrollTop;

    if (subir > 0) {

        window.requestAnimationFrame(up);
        window.scrollTo(0, subir - (up / 10))
    }


}

let boton = document.getElementById('irarriba');

window.onscroll = function() {

    let scroll = document.documentElement.scrollTop;

    if (scroll > 100) {

        boton.style.transform = "scale(1)";

    } else if (scroll < 100) {
        boton.style.transform = "scale(0)";

    }
}