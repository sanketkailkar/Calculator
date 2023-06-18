let buttons = document.querySelectorAll("button");
let display = document.querySelector("textarea");
let string = "";

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {

        if (e.target.innerHTML == "=") {
            string = eval(string);
            display.innerText = string;
        }
        else if (e.target.innerHTML == "DE") {
            string = string.slice(0, -1)
            display.innerText = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            display.innerText = string;
        } else if (e.target.innerHTML == "%") {
            string = string/100;
            display.innerText = string;
        } else {
            string = string + e.target.innerText;
            display.innerText = string;
        }
    })
})