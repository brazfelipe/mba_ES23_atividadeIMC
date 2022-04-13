function calculoIMC(){
    var peso = document.querySelector("#peso");
    var altura = document.querySelector("#altura");
    altura.value = altura.value/100;
    var resultado = peso.value/(altura.value*altura.value);

    var categoria;
    if(resultado < 18.5)
    categoria="Magreza";
    else if(resultado >= 18.5 && resultado < 24.9)
    categoria="Normal";
    else if(resultado >=24.9 && resultado < 30)
    categoria="Sobrepeso";
    else if(resultado >=30)
    categoria="Obesidade";

    document
    .querySelector('.categoria p')
    .innerHTML = categoria;
    return categoria;
}


function updateMessage(){
    document
        .querySelector('.categoria p')
        .innerHTML = calculoIMC();
}

