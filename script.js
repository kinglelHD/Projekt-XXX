let section = 0

let minute1 = 6
let minute2 = 0
let second1 = 0
let second2 = 0

let spalte = 0
const PASSWORD = [6,9,1,8,7]

function weiter() {
    section++
    handle_hidden(section)
}

function zurück() {
    section--
    handle_hidden(section)
}

function start() {
    weiter()
    timer()
    setTimeout(tipp,1200000)
}

function tipp() {
    const tipps = document.querySelectorAll(".tipp")
    for (let i = 0; i < tipps.length; i++) {
        tipps[i].style.display = "block"
        }
    setTimeout(tipp2,1200000)
}

function tipp2() {
    const tipps = document.querySelectorAll(".tipp2")
    for (let i = 0; i < tipps.length; i++) {
        tipps[i].style.display = "block"
        }
}

function timer() {
    if (second2 >= 1) {
        second2--
    } else if (second1 >= 1) {
        second1--
        second2 = 9
    } else if (minute2 >= 1) {
        minute2--
        second1 = 5
        second2 = 9
    } else if (minute1 >= 1) {
        minute1--
        minute2 = 9
        second1 = 5
        second2 = 9
    } else {
        weiter()
        return
    }
    
    document.getElementById("minute-1").setAttribute("class","num-"+minute1);
	document.getElementById("minute-2").setAttribute("class","num-"+minute2);
	document.getElementById("second-1").setAttribute("class","num-"+second1);
	document.getElementById("second-2").setAttribute("class","num-"+second2);

    setTimeout(timer, 1000)
}

function input(input) {
    console.log(input);
    const output = document.querySelectorAll("#ausgabe tr td")
    if (input <= 9 && spalte <= 4) {
        output[spalte].innerHTML = input
        spalte <= 4 && spalte++
    } else if (input === 10 && spalte >= 1) {
        spalte--
        output[spalte].innerHTML = "_"
    } else if (input === 11) {
        let data = 0
        for (let i = 0; i < output.length; i++) {
            if (output[i].innerHTML == PASSWORD[i]) {
                data++
            }
        }
        if (data === 5) {
            section = 15
            handle_hidden(section)
        } else {
            spalte = 0
            for (let i = 0; i < output.length; i++) {
                output[i].innerHTML = "_"
            } 
        }
    } else return
}

function handle_hidden(SECTION) {
    const elements = document.querySelectorAll(".section")
        for (let i = 0; i < elements.length; i++) {
        document.getElementById(i).classList.add("hidden")
        }
    document.getElementById(SECTION).classList.remove("hidden")
}

handle_hidden(section)