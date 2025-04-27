
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "investigator284" && password === "forpilt") {
        window.location.href = "forum.html";
    } else {
        document.getElementById('error-msg').textContent = "用户名或密码错误。";
    }
});
