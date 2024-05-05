let userName = prompt("What is your name?", "Danil");
let userSurname = prompt("What is your surname?", "Khrust");
let userAge = +prompt("How old are you?", "18");
document.write(`I am ${userName} ${userSurname} and me ${userAge} years old. <br />`);

let number = +prompt("Введіть будь-яке число");
let n = number.toString().split('');

if (n.length === 5) {
    for (let i = 0; i < n.length; i++) {
        document.write(n[i] + "&nbsp;");
    }
} else {
    document.write("Помилка!!!");
}




