const sign_up_btn = document.querySelector('#signUpBtn');
const closeBtn = document.querySelector(".close");
const modal = document.querySelector("#signUpModal");


sign_up_btn.addEventListener('click', () => {
    modal.style.display = 'block';
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


