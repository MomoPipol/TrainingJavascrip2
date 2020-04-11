
Calculadora = {

  display: document.getElementById("display"),
  valores:"0",
  operaciones:"",
  var1:0,
  var2:0,
  var3:0,
  resultado:0,
  igual:false,

/*luego del resultado puedo seguir agregando numeros.*/
  init: (function(){
    this.teclas();
    this.calculador();
  }), //()


  teclas: function() {// reducir y restablecer teclas
  var teclas = document.querySelectorAll(".tecla");

  for (let i = 0; i < teclas.length; i++) {
      teclas[i].addEventListener("click", function () {
          teclas[i].style.transform = "scale(0.96)";

  		setTimeout(function () {
              teclas[i].style.transform = "scale(1)";
          }, 100);

      });
    };
  },
  calculador:function(){ //Asignando interacción al calculador
    document.getElementById("0").addEventListener("click", function() {Calculadora.numero("0");});
		document.getElementById("1").addEventListener("click", function() {Calculadora.numero("1");});
		document.getElementById("2").addEventListener("click", function() {Calculadora.numero("2");});
		document.getElementById("3").addEventListener("click", function() {Calculadora.numero("3");});
		document.getElementById("4").addEventListener("click", function() {Calculadora.numero("4");});
		document.getElementById("5").addEventListener("click", function() {Calculadora.numero("5");});
		document.getElementById("6").addEventListener("click", function() {Calculadora.numero("6");});
		document.getElementById("7").addEventListener("click", function() {Calculadora.numero("7");});
		document.getElementById("8").addEventListener("click", function() {Calculadora.numero("8");});
		document.getElementById("9").addEventListener("click", function() {Calculadora.numero("9");});
		document.getElementById("on").addEventListener("click", function() {Calculadora.inicio();});
		document.getElementById("sign").addEventListener("click", function() {Calculadora.unitary();});
		document.getElementById("punto").addEventListener("click", function() {Calculadora.decimal();});
		document.getElementById("igual").addEventListener("click", function() {Calculadora.resultante();});
		document.getElementById("dividido").addEventListener("click", function() {Calculadora.operador("/");});
		document.getElementById("por").addEventListener("click", function() {Calculadora.operador("*");});
		document.getElementById("menos").addEventListener("click", function() {Calculadora.operador("-");});
		document.getElementById("mas").addEventListener("click", function() {Calculadora.operador("+");});

  },
//ON/C //Solo un 0 y remplazar 0?

  inicio:function(){
    this.valores="0";
    this.operaciones="";
    this.var1=0;
    this.var2=0;
    this.var3=0;
    this.resultado=0;
    this.igual=false;
    this.actualizar();

  },



//DECIMALES

//UNARIO

//HACIENDO
numero: function(valor) {
if (this.valores.length < 8) {//PRIMEROS8
  if (this.valores=="0") {
    this.valores = "";
    this.valores = this.valores + valor;
  } else {
    this.valores = this.valores + valor;
  }
this.actualizar();
}
},
operador: function(operadores){
  this.var1 = parseFloat(this.valores);
  this.valores="";
  this.operaciones = operadores;
  this.igual= false;
  this.actualizar();
},
//IGUAL

resultante: function(){
if(!this.igual){
  this.var2=parseFloat(this.valores);
  this.var3=this.var2;
  this.ejecuta(this.var1,this.var3,this.operaciones);
}else{
  this.ejecuta(this.var1,this.var3,this.operaciones);
}
this.var1=this.resultado;
this.valores="";
if (this.resultado.toString().length < 9){
  this.valores=this.resultado.toString();
}else {
  this.valores=this.resultado.toString().slice(0,8)+"...";
}
this.igual=true;
this.actualizar();
},
//ejecutar Operaciones
ejecuta:function(var1,var2,operaciones){
  switch(operaciones){
    case "+":
      this.resultado = eval(var1 + var2);
    break;
    case "-":
      this.resultado = eval(var1 - var2);
    break;
    case "*":
      this.resultado = eval(var1 * var2);
    break;
    case "/":
      this.resultado = eval(var1 / var2);

  }
},
  actualizar:function(){
    this.display.innerHTML = this.valores
  },

} ;
Calculadora.init();
//https://www.w3schools.com/code/tryit.asp?filename=GDN2TDROJN74
