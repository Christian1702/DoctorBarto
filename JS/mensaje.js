const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Su mensaje se ha enviado con éxito. Gracias por comentar. Esto nos ayuda a mejorar el contenido del blog.');
    formulario.reset();
});
