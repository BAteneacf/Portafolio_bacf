document.addEventListener("DOMContentLoaded", function() {
    const menuItems = [
        { title: "Perfil", link: "/perfil.html" },
        { title: "Portafolio", link: "/portafolio.html" },
        { title: "Contáctame", link: "/contacto.html" }
    ];

    const navList = document.getElementById("nav-list");

    menuItems.forEach(item => {
        const listItem = document.createElement("li");
        const button = document.createElement("button");
        const link = document.createElement("a");

        link.href = item.link;
        link.title = item.title;
        link.textContent = item.title;

        button.classList.add("boton-lista", item.title.toLowerCase()); // Agregamos la clase dinámicamente
        button.appendChild(link);
        listItem.appendChild(button);
        navList.appendChild(listItem);
    });
});

// navbar.js
var isMenuOpen = false; 

function toggleMenu() {
    var navList = document.getElementById("nav-list");
    isMenuOpen = !isMenuOpen; 
    navList.style.display = isMenuOpen ? 'block' : 'none';

    var burgerBtn = document.querySelector(".burger-btn");
    burgerBtn.innerHTML = isMenuOpen ? '✕' : '☰';
}
