//Variables generales
var num1 = 0;
var num2 = 0;
var operaciones;

//Número presionado
function presionarNumero(num){
    if (num1 == 0 && num1 !== '0.'){
        num1 = num;
    } else {
        num1 += num;
    }
    refrescar();
}

//Presionar coma
function presionarComa(){
    if (num1 == 0) {
        num1 = '0.';
    } else if (num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refrescar();
}

//Resetear presionando la C
function presionarC(){
    num1 = 0;
    num2 = 0;
    refrescar();
}


//Operaciones aritméticas
function operar(valor){
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("calc").value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    operaciones = valor;
}

//Presionar el igual

function presionarIgual(){
    num1 = parseFloat(num1);
    switch (operaciones){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
        case 5:
            num1 = Math.pow(num2, num1);
        break;
        case 6:
            num1 = Math.sqrt(num2);
        break;
        case 7:
            num1 = num1%num2;
        break;
    }
    refrescar();
    num2 = parseFloat(num1);
    num1 = 0;
}

function refrescar(){
    document.getElementById("calc").value = num1;
}