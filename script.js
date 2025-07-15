
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    response.textContent = `Thanks for your message, ${name}! I will get back to you at ${email}.`;
    form.reset();
  });
});
