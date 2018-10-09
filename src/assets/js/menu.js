$(document).ready(function () {

  //selector a la clase opcion para darle función al evento click
  $(".opcion").click(function () {

    //eliminamos la clase activa por si una opción la contiene
    $(".opcion").removeClass("opcionActiva");

    //asignamos la clase opcionActiva a la opción presionada
    $(this).addClass("opcionActiva")

  })
})
