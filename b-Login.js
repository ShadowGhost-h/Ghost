const login = document.querySelector("#login");
login.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    let em = email.value;
    let pass = password.value;
    if (localStorage.users) {
        let users = JSON.parse(localStorage.getItem("users"));
        let foundUser = false;
        for (let i = 0; i < users.length; i++) {
            if (em === users[i].email && pass === users[i].pw) {
            foundUser = true;
            break;
            }
        }
        if (foundUser) {
            location.replace('Home.html');
        } else {
            alert('Hãy nhập lại email hoặc mật khẩu của bạn');
        }
    } else {
        alert('Không tìm thấy người dùng');
    }
});