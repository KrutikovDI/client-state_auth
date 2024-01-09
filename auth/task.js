const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const spanId = document.getElementById("user_id")
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const formData = new FormData(form);
  if (localStorage.getItem(formData.get('login')) == null &&
      formData.get('login') == "demo" &&
      formData.get('password') == "demo")  {
    console.log(formData.get('login'))
    console.log(formData.get('password'))
    localStorage.setItem("demo", "demo");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);
    welcome.classList.add("welcome_active");
    spanId.textContent = formData.get('login')
    signin.classList.remove("signin_active");
  } else if (localStorage.getItem(formData.get('login')) == "demo" && formData.get('password') == "demo") {
        const xhr = new XMLHttpRequest();
    console.log(formData.get('login'))
    console.log(formData.get('password'))
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);
    welcome.classList.add("welcome_active");
    spanId.textContent = formData.get('login')
    signin.classList.remove("signin_active");
  } else {alert("Неверный логин/пароль")}
})