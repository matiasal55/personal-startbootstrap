$(document).ready(function () {
  $("#submit").click(function (e) {
    verificarNombre(e);
    verificarTelefono(e);
    verificarMensaje(e);
    verificarEmail(e);
  });

  $("form").submit(function (e) {
    $("#contacto").html(
      '<h4 class="text-center">Gracias por contactarse. Le responderemos a la brevedad.</h4>'
    );
  });

  var verificarNombre = function (e) {
    var nombre = $("#name").val();
    if (nombre.length == 0) {
      $("#error-nombre").html("Falta nombre");
      e.preventDefault();
    } else if (nombre.length > 30) {
      $("#error-nombre").html("Nombre muy largo");
      e.preventDefault();
    } else $("#error-tel").html("");
  };

  var verificarEmail = function (e) {
    var email = $("#email").val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (email.length == 0) {
      $("#error-email").html("Falta email");
      e.preventDefault();
    } else if (!emailReg.test(email)) {
      $("#error-email").html("Email incorrecto");
      e.preventDefault();
    } else $("#error-email").html("");
  };

  var verificarTelefono = function (e) {
    var telefono = $("#phone").val();
    if (telefono.length == 0) {
      $("#error-tel").html("Falta teléfono");
      e.preventDefault();
    } else if (telefono.length > 30) {
      $("#error-tel").html("Teléfono muy largo");
      e.preventDefault();
    } else if (telefono[0] == 0 || (telefono[0] == 1 && telefono[1] == 5)) {
      $("#error-tel").html("Agregue teléfono sin el 0 y sin el 15");
      e.preventDefault();
    } else if (!Number.isInteger(parseInt(telefono))) {
      $("#error-tel").html("Formato no válido");
      e.preventDefault();
    } else $("#error-tel").html("");
  };

  var verificarMensaje = function (e) {
    var mensaje = $("#message").val();
    if (mensaje.length == 0) {
      $("#error-msj").html("Falta mensaje");
      e.preventDefault();
    } else if (mensaje.length > 300) {
      $("#error-msj").html("Mensaje demasiado largo (máximo 300 caracteres)");
      e.preventDefault();
    } else if (mensaje.length < 50) {
      $("#error-msj").html("Mensaje demasiado corto (mínimo 50 caracteres)");
      e.preventDefault();
    } else $("#error-msj").html("");
  };

  $(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  var menu = function () {
    if ($(document).scrollTop() > 100) {
      $("header").addClass("shrink");
    } else $("header").removeClass("shrink");
  };

  $(document).on("scroll", menu);
});
