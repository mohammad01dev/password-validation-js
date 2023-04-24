let list = document.querySelectorAll("li");
let passBox = document.querySelector(".passBox")

let regularList = [
  {"regex": /.{8,}/, "index":0},
  {"regex": /[0-9]/, "index":1},
  {"regex": /[a-z]/, "index":2},
  {"regex": /[A-Z]/, "index":3},
];

function keysHandler(ev) {
    let targetVal = ev.target.value;
    
    if (ev.key !== "shift" && ev.key !== "CapsLock" && ev.key !== "Alt") {
        
            regularList.forEach(data => {
                let isValidReg = data.regex.test(targetVal);
                console.log(isValidReg);
                let reqularmentData = list[data.index];

                if(isValidReg) {
                    reqularmentData.classList.add("valid");
                } else {
                    reqularmentData.classList.remove("valid");
                    reqularmentData.classList.add("nValid");
                }
            })
    }
}

passBox.addEventListener("keyup", keysHandler)