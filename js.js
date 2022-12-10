// Написати реалізацію кнопки "Показати пароль". 
//Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:
// У файлі index.html лежить розмітка двох полів вводу пароля.
// Після натискання на іконку поруч із конкретним полем - повинні відображатися символи, які ввів користувач, іконка змінює свій зовнішній вигляд. 
//У коментарях під іконкою - інша іконка, саме вона повинна відображатися замість поточної.
// Коли пароля не видно - іконка поля має виглядати як та, що в першому полі (Ввести пароль)
// Коли натиснута іконка, вона має виглядати, як та, що у другому полі (Ввести пароль)
// Натиснувши кнопку Підтвердити, потрібно порівняти введені значення в полях
// Якщо значення збігаються – вивести модальне вікно (можна alert) з текстом – You are welcome;
// Якщо значення не збігаються - вивести під другим полем текст червоного кольору Потрібно ввести однакові значення
// Після натискання на кнопку сторінка не повинна перезавантажуватись
// Можна міняти розмітку, додавати атрибути, теги, id, класи тощо.

const form = document.querySelector(".password-form")
form.addEventListener("submit", function(event){
event.preventDefault()
const input1 = document.querySelector("#password")
const input2 = document.querySelector("#confirm-password")

removeError()

if(input1.value === input2.value){
    alert("You are welcome!")
} else {
    const p = renderError()
    form.append(p)
}
})

function renderError(){
const p = document.createElement("p")
p.innerText = "error"
p.style.color = "red"
p.id = "error"
return p 
}

function removeError(){
    const error = document.querySelector("#error")
    if(error){
    error.remove()
    }
}

form.addEventListener("click", function(event){
    if(event.target.closest(".icon-password")){
        showPassword()
    }
})

function showPassword(){
    let eye = this.event.target 
    eye.classList.toggle("fa-eye-slash") 
    let password = eye.closest(".input-wrapper").querySelector(".password")
    const type = password.getAttribute("type") === "password" ? "text" : "password" 
    password.setAttribute("type", type)
}