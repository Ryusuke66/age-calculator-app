let date = new Date(),
    d = date.getDate(),
    m = date.getMonth() + 1,
    y = date.getFullYear(),
    form = document.querySelector("form"),
    input = document.querySelectorAll("input"),
    day = input[0],
    month = input[1],
    year = input[2],
    label = document.querySelectorAll("label"),
    errorText = document.querySelectorAll("i"),
    age = document.querySelectorAll(".result span"),
    yearsCalc = age[0],
    monthsCalc = age[1],
    daysCalc = age[2];
    
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


form.addEventListener("submit", ageCalc);

function validation() {
    let valid = true;
    input.forEach(i => {
        const parent = i.parentElement;
        if (i.value === '') {
            parent.querySelector("i").classList.add("error");
            parent.querySelector("i").innerText = "This field is required";
            parent.querySelector("label").classList.add("date-error");
            i.style.border = "1px solid hsl(0, 100%, 67%)";
            valid = false;
        } else {
            parent.querySelector("i").classList.remove("error");
            parent.querySelector("label").classList.remove("date-error");
            i.style.border = "1px solid hsl(0, 0%, 86%)";
        }
    });

    if (+day.value > 28 && +day.value > months[+month.value - 1]) {
        errorText[0].classList.add("error");
        errorText[0].textContent = "Must be a valid date";
        label.forEach(a => a.classList.add("date-error"));
        input.forEach(v => v.style.border = "1px solid hsl(0, 100%, 67%)");
        valid = false;
    }

    if (+day.value > 31 || +day.value < 0) {
        errorText[0].classList.add("error");
        errorText[0].textContent = "Must be a valid day";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        label[0].classList.add("date-error");
        valid = false;
    } 

    if (+month.value< 0 || +month.value > 12) {
        errorText[1].classList.add("error");
        errorText[1].textContent = "Must be a valid Month";
        label[1].classList.add("date-error");
        month.style.border = "1px solid hsl(0, 100%, 67%)";
        valid = false;
    }

    if (+year.value > date.getFullYear() || +year.value < 0) {
        errorText[2].classList.add("error");
        errorText[2].textContent = "Must be in the past";
        label[2].classList.add("date-error");
        valid = false;
        
    }


    return valid;
}

function ageCalc() {
    if(validation()) {
        
        if (+day.value > d) {
            d += months[m - 1];
            m -= 1;
        }

        if (+month.value > m) {
            m +=12;
            y -= 1;
        }

        daysCalc.textContent = d - +day.value;
        monthsCalc.textContent = m - +month.value;
        yearsCalc.textContent = y - +year.value;
    }
}
