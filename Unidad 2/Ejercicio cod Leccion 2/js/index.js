document.getElementById('boton-perfil').addEventListener("click", function(){
  var Persona = {
    nombre: 'Gabriel Santos',
    ciudad: 'New York',
    EntidadDeSalud: 'Salud Para Ti',
    Peso: 68,
    Estatura: 1.76,
    FechaDeNac: new Date("Apr 02, 1979"),
    UltimasConsultas = {
        FechaConsulta: 'Fecha: 23 Junio 2016',
        consulta: ['El paciente no presenta signos de dolor en las cicatrices de la cirugía','Se mencionan repetidos dolores en la zona abdominal']
      }
      var HistoriaClinica1=["Fractura de fémur","3/11/2015"] // punto 7
      var HistoriaClinica2=["Apendicitis","22/8/2015"]
      var HistoriaClinica3=["Insuficiencia Renal","1/3/2013"],

      obtenerEdad:function(){
        var hoy = new Date();
        var edad = hoy.getFullYear()-this.fechaNacimiento.getFullYear();
        return obtenerEdad;
      },

      obtenerPeso:function(){}

    }
})
