const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const spanId = document.getElementById("user_id")
if (localStorage.getItem('user') == null) {
  form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = 'json';
  xhr.send(formData);
  xhr.onload = function() {
    // console.log(xhr.response.user_id)
    if (xhr.response.success == true) {
      welcome.classList.add("welcome_active");
      spanId.textContent = xhr.response.user_id;
      signin.classList.remove("signin_active");
      localStorage.setItem('user', xhr.response.user_id);
     }
    else {
      alert("Неверный логин/пароль");
    }
   }
 })
}
else {
  welcome.classList.add("welcome_active");
  spanId.textContent = localStorage.getItem('user');
  signin.classList.remove("signin_active");
}
