

  var Persona = {
    nombre: 'Gabriel Santos',
    ciudad: 'New York',
    EntidadDeSalud: 'Salud Para Ti',
    Peso: 68,
    Estatura: 1.76,
    FechaDeNac: new Date("Apr 02, 1979"),
    UltimasConsultas : { //objeto Ultimas consultas agrego propiedades es un anidado. de una fecha y de un vector
        FechaConsulta: 'Fecha: 23 Junio 2016',
        anotaciones: ['El paciente no presenta signos de dolor en las cicatrices de la cirugía','Se mencionan repetidos dolores en la zona abdominal']//cuando arranca con [] es por que es un vector
      },

      historiaClinica:[
        ["Fractura de fémur","3/11/2015"],
        ["Apendicitis","22/8/2015"],
        ["Insuficiencia Renal","1/3/2013"] // punto 7 es una matriz almacenada en 3 variable diferentes filas y columnas
          ],

      obtenerEdad:function(){ //me mata que la obtener edad a los 2 puntos define una funcion, y adentro defina variable con
        var hoy = new Date();
        var edad = hoy.getFullYear()-this.FechaDeNac.getFullYear();
        return edad;
      },

      obtenerMasaCorporal:function(){
        var imc =(this.Peso/this.Estatura)*2;
        return imc;
      },

      imprimirDatos: function(){
        console.log("Nombre: "+this.nombre);
        console.log("Ciudad: "+this.ciudad);
        console.log("Entidad de Salud: "+this.EntidadDeSalud);
        console.log("Peso "+this.Peso+" kgs");
        console.log("Estatura: "+this.Estatura+" m");
        console.log("Fecha de Nacimiento: "+this.FechaDeNac);
        console.log("Fecha de la ultima consulta: "+this.UltimasConsultas.FechaConsulta);
        console.log("Anotaciones: "+this.UltimasConsultas.anotaciones[0]+", "+this.UltimasConsultas.anotaciones[1]+", "+this.UltimasConsultas.anotaciones[2]+".");
        console.log("Historia Clinica: "+this.historiaClinica[0][0]+" - "+this.historiaClinica[0][1]+". "+this.historiaClinica[1][0]+" - "+this.historiaClinica[1][1]+". "+this.historiaClinica[2][0]+" - "+this.historiaClinica[2][1]+". ");
        console.log("Edad: "+this.obtenerEdad());
        console.log("IMC: "+this.obtenerMasaCorporal());
    }
}
    document.getElementById('boton-perfil').addEventListener("click", function(){
      Persona.imprimirDatos();
    })
