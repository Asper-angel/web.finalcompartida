// Selecciona el botón
const themeToggle = document.getElementById("theme-toggle");

// Verifica si había un tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Modo Claro";
}

// Evento para cambiar de tema
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Modo Claro";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Modo Oscuro";
    }
});