const formulario = document.querySelector('form');

  formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Aquí puedes agregar código para enviar los datos del formulario a un servidor, si es necesario

    // Mostrar el mensaje de confirmación
    alert('Su mensaje se ha enviado con éxito. Gracias por comentar. Esto nos ayuda a mejorar el contenido del blog.');

    // Limpiar los campos del formulario (opcional)
    formulario.reset();
  });