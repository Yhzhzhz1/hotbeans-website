document.getElementById("applicationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const message = document.getElementById("successMessage");
  message.textContent = "Application sent successfully! Redirecting...";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
});