const dayValue = document.querySelector(".day-info");
const monthValue = document.querySelector(".month-info");
const yearValue = document.querySelector(".year-info");


let buttonForm = document.querySelector(".button-form");

buttonForm.addEventListener("click", sendValue);

function sendValue(e){
    e.preventDefault();
    let newDiv = document.createElement("span");


    if(dayValue.value === ""){
        newDiv.innerHTML += `Most be a valid day`;
        newDiv.style.fontSize = "10px";
        newDiv.style.color = "red"
        document.querySelector(".birthday-day").append(newDiv);
        setTimeout(()=>{
            document.querySelector(".birthday-day").removeChild(newDiv)
        }, 1000)

        return;
    } 
    
    if(monthValue.value === ""){
        newDiv.innerHTML += `Most be a valid month`;
        newDiv.style.fontSize = "10px";
        newDiv.style.color = "red"
        document.querySelector(".birthday-month").append(newDiv);
        setTimeout(()=>{
            document.querySelector(".birthday-month").removeChild(newDiv)
        }, 1000)

        return;
    }
    
    if(yearValue.value === ""){
        newDiv.innerHTML += `Most be a valid year`;
        newDiv.style.fontSize = "10px";
        newDiv.style.color = "red"
        document.querySelector(".birthday-year").append(newDiv);
        setTimeout(()=>{
            document.querySelector(".birthday-year").removeChild(newDiv)
        }, 1000)

        return;
    }

    checkDate();
}

function handleNumber(){
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    let yearDate = y - yearValue.value;
    let monthDate = m - monthValue.value;
    let dayDate = dayValue.value - d;

    if(d > dayValue.value){
        let previousMonth = new Date(y, m - 1, 0);
        let daysInPreviousMonth = previousMonth.getDate();

        dayDate += daysInPreviousMonth;
        monthDate--;
    }

    if(m < monthValue.value){
        monthDate += 13;
        yearDate--;
    }

    document.querySelector(".birthday-calc--year span").innerHTML = yearDate;
    document.querySelector(".birthday-calc--month span").innerHTML = monthDate;
    document.querySelector(".birthday-calc--day span").innerHTML = dayDate; 

}

function checkDate(){
    let newDiv = document.createElement("span");

    if(dayValue.value > 31){
        newDiv.innerHTML += `coloque entre 1 e 31`;
        newDiv.style.fontSize = "10px";
        newDiv.style.color = "red"
        document.querySelector(".birthday-day").append(newDiv);
        setTimeout(()=>{
            document.querySelector(".birthday-day").removeChild(newDiv)
        }, 1000);

        dayValue.value = "";
        return;
    }
    
    if(monthValue.value > 12){
        newDiv.innerHTML += `Coloque entre 1 e 12`;
        newDiv.style.fontSize = "10px";
        newDiv.style.color = "red"
        document.querySelector(".birthday-month").append(newDiv);
        setTimeout(()=>{
            document.querySelector(".birthday-month").removeChild(newDiv)
        }, 1000);

        monthValue.value = "";
        return;
    }
    
    if(yearValue.value > 2023){
        newDiv.innerHTML += `Até o ano atual`;
        newDiv.style.fontSize = "10px";
        newDiv.style.color = "red"
        document.querySelector(".birthday-year").append(newDiv);
        setTimeout(()=>{
            document.querySelector(".birthday-year").removeChild(newDiv)
        }, 1000);

        yearValue.value= "";
        return;
    }

    handleNumber();
}

function limitHeight(input, tamanhoMax){
    if(input.value.length > tamanhoMax){
        input.value = input.value.slice(0, tamanhoMax)
    }
}