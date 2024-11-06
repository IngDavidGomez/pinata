// Animación de aparición al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function showSectionOnScroll() {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", showSectionOnScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".about-content p, .about-content h3");

    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("show");
        }, index * 600); // Retraso escalonado de 600 ms entre elementos
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactSection = document.getElementById("contact");
    setTimeout(() => {
        contactSection.classList.add("show");
    }, 800); // Retraso para la aparición de la sección
});
