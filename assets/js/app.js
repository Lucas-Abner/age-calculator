let buttonForm = document.querySelector(".button-form");

buttonForm.addEventListener("click", sendValue);

function sendValue(e){
    e.preventDefault();
    let dayValue = document.querySelector(".day-info");
    let monthValue = document.querySelector(".month-info");
    let yearValue = document.querySelector(".year-info");

    if(dayValue.value === ""){
        alert("Necessario preencher o dia com 2 números");
    }else if(monthValue.value === ""){
        alert("Necessario preencher o mês com 2 números");
    }else if(yearValue.value === ""){
        alert("Necessario preencher o dia com 4 números");
    }else{
        handleNumber();
    }
}

function handleNumber(){

    let dayValue = document.querySelector(".day-info");
    let monthValue = document.querySelector(".month-info");
    let yearValue = document.querySelector(".year-info");

    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDay() + 1;

    let yearDate = y - yearValue.value;
    let monthDate = m - monthValue.value
    let dayDate = dayValue.value - d;

    document.querySelector(".birthday-calc--year span").innerHTML = toInt(yearDate);
    document.querySelector(".birthday-calc--month span").innerHTML = toInt(monthDate);
    document.querySelector(".birthday-calc--day span").innerHTML = toInt(dayDate); 
}

function toInt(valor){
    return valor < 10 ? `0${valor}` : valor;
}

function limitHeight(input, tamanhoMax){
    if(input.value.length > tamanhoMax){
        input.value = input.value.slice(0, tamanhoMax)
    }
}