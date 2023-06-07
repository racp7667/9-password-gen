const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
                    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", 
                    "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
                    "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", 
                    "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
                     "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


let pass1El = document.getElementById("password1")
let pass2El = document.getElementById("password2")
let len = characters.length - 1

function generatePasswords() {
    getPassword1()
    getPassword2()
}

function getPassword1() {
    let password1 = ""
    let passwordArr1 = []
    for(let i = 0; i < 15; i += 1){
        let randomNum1 = Math.round(Math.random() * len)
        passwordArr1.push(characters[randomNum1])
    }
    for(let j = 0; j < passwordArr1.length; j++){
        password1 += passwordArr1[j]
    }
    // console.log(password1)
    pass1El.textContent = password1
}

function getPassword2() {
    let password2 = ""
    let passwordArr2 = []
    for(let i = 0; i < 15; i += 1){
        let randomNum2 = Math.round(Math.random() * len)
        passwordArr2.push(characters[randomNum2])
    }
    for(let j = 0; j < passwordArr2.length; j++){
        password2 += passwordArr2[j]
    } 
    // console.log(password2)
    pass2El.textContent = password2

}

