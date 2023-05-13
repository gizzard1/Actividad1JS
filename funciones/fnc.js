function edadFcn() {
    resultado = "";
    edad = document.getElementById("edad").value;

    edad = parseFloat(edad);

    if(edad < 18) {
        resultado = "Eres menor de edad";   
               
    } else if(edad >= 18) {
        resultado = "Eres mayor de edad";
        
    }  

    document.getElementById("respuesta").value = resultado;  
    
}

function imcFcn() {
   peso =  document.getElementById("peso").value;
   altura = document.getElementById("altura").value;
   peso = parseFloat(peso);
   altura = parseFloat(altura);
   altura = Math.pow(altura,2);
   IMC = peso / altura;
   tIMC = "";
   
   switch(true) {
    case IMC < 16:
        tIMC = "Tu IMC indica que tienes desnutrición severa";
        color = "red";
    break;

    case IMC>16.1 && IMC < 18.4:
        tIMC = "Tu IMC indica que tienes desnutrición moderada";
        color ="orange";
    break;

    case IMC>18.5 && IMC < 22:
        tIMC = "Tu IMC indica que tienes bajo peso";
        color = "yellow";
    break;

    case IMC > 22.1 && IMC <= 24.9:
        tIMC = "Tu IMC indica que tu peso es normal";
        color ="green";
    break;

    case IMC > 25 && IMC <= 29.9:
        tIMC = "Tu IMC indica que sufres de sobrepeso";
        color="yellow"
    break;

    case IMC > 30  && IMC <= 34.9:
        tIMC = "Tu IMC indica que sufres de obesidad grado I";
        color="orange";
    break;

    case IMC > 35  && IMC <= 39.9:
        tIMC = "Tu IMC indica que sufres de obesidad grado II";
        color="orange";
    break;

    case IMC > 40:
        tIMC = "Tu IMC indica que sufres de obesidad grado III";
        color="red";
    break;
   }

   document.getElementById("imc").value = tIMC;
   document.getElementById("imc").style.color = color;
}



