const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Obtener el modal
var modal = document.getElementById("myModal");
var iframe = document.getElementById("pdfFrame");

// Obtener el botón que abre el modal
var buttons = document.getElementsByClassName("openModalBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Añadir evento a cada botón para abrir el modal
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        var pdfSrc = this.getAttribute("data-pdf");
        iframe.src = pdfSrc;
        modal.style.display = "block";
    }
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
    iframe.src = ""; // Limpiar el src del iframe para detener la carga del PDF
}

// Cuando el usuario hace clic en cualquier lugar fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        iframe.src = ""; // Limpiar el src del iframe para detener la carga del PDF
    }
}
