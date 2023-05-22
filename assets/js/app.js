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
        handleNumber(dayValue, monthValue, yearValue);
    }
}

function handleNumber(dayValue, monthValue, yearValue){
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    let yearDate = y - yearValue.value;
    let monthDate = m - monthValue.value;
    let dayDate = dayValue.value - d;

    document.querySelector(".birthday-calc--year span").innerHTML = yearDate;
    document.querySelector(".birthday-calc--month span").innerHTML = monthDate;
    document.querySelector(".birthday-calc--day span").innerHTML = dayDate; 

    checkDate(dayValue, monthValue, yearValue);
}

function  checkDate(dayValue, monthValue, yearValue){
    if(dayValue.value > 31){
        alert("Valor máximo de dias é 31")
    }else if(monthValue.value > 12){
        alert("Valor máximo de mês a ser inserido é 12")
    }else if(yearValue.value > 2023){
        alert("O valor informado é baseado no ano atual")
    }
}

function limitHeight(input, tamanhoMax){
    if(input.value.length > tamanhoMax){
        input.value = input.value.slice(0, tamanhoMax)
    }
}