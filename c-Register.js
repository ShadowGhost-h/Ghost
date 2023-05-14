const register = document.querySelector("#register");
register.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirmpassword");
  const username = document.getElementById("username");
  let us = username.value;
  let em = email.value;
  let pw = password.value;
  let cpw = confirmpassword.value;
  console.log(username)
  if (localStorage.users) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.push({
      email: em.trim(),
      password: pw.trim(),
      confirmpassword: cpw.trim(),
      username: us.trim()
    });
    console.log(email.value, password.value);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    localStorage.setItem(
      "users",
      JSON.stringify([
        {
          email: email.value.trim(),
          pw: password.value.trim(),
          cpw: confirmpassword.value.trim(),
          us: username.value.trim()
        }
      ])
    );
  } 
  if (pw === cpw){
    location.replace("./b-login.html");
  } else {
    alert('Không trùng khớp với mật khẩu');
  };
});
