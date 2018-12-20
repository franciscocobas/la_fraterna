jQuery.extend(jQuery.validator.messages, {
  required: "Este campo es requerido.",
  remote: "Por favor arregla este campo.",
  email: "Por favor ingresa una direccion de email válida.",
  url: "Por favor ingresa una URL válida.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Please enter the same value again.",
  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Por favor ingres no más de {0} caracteres."),
  minlength: jQuery.validator.format("Por favor ingresa al menos de {0} caracteres."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} caracteres long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});