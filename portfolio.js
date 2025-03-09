// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Dark Mode Toggle Button
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.backgroundColor = "#e68200";
toggleButton.style.color = "white";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "5px";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode Styles
const darkModeStyle = document.createElement("style");
darkModeStyle.innerHTML = `
    .dark-mode {
        background-color: #1e1e1e;
        color: #fff;
    }
    .dark-mode a {
        color: #ffcc00;
    }
    .dark-mode header {
        background: #444;
    }
    .dark-mode section {
        background-color: #555;
        color: #fff;
    }
    .dark-mode ul li {
        background: #777;
        color: #fff;
    }
    .dark-mode footer {
        background: #222;
    }
    .dark-mode .dark-mode-btn {
        background-color: #ffcc00;
        color: #000;
    }
`;
document.head.appendChild(darkModeStyle);

// Scroll Animation for Sections
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.2 }
);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
});

// Hover Effects for List Items
document.querySelectorAll("ul li").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#ffcc00";
        item.style.color = "black";
        item.style.transition = "0.3s";
    });

    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "#f8f8f8";
        item.style.color = "black";
    });
});

// Button Hover Effects
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.2s ease-in-out";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });

    button.addEventListener("click", () => {
        alert(`You clicked: ${button.textContent}`);
    });
});

// Contact Form Validation (If you add a form in the future)
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
    });
}
