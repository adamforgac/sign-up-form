const checkmark = document.querySelector(".checkmark");
checkmark.addEventListener("click", function() {
    checkmark.classList.toggle("checked");
});

const lostPassword = document.querySelector(".forgotten-password p");
lostPassword.addEventListener("click", function() {
    alert("You are retarded")
})